const {
  Router
} = require('express');
const {
  join
} = require('path');

let analyticsFileName = 'cocosAnalytics.min.2.2.1.js';
const Paths = {
  sdkPath: join(__dirname, analyticsFileName),
  sdkURL: 'ccservices-scripts/' + analyticsFileName,
};

const appid = '683178215';
const store = '160564';

module.exports = {

  router: null,

  load() {
    this.hookPreviewServer();
  },

  unload() {
    this.unhookPreviewServer();
  },

  insertSDK(settings, url) {
    let newSettings = null;
    if (settings.match(/jsList/)) {
      newSettings = settings.replace(/,\s*jsList\s*:\s*\[/, '$&' + JSON.stringify(url) + ', ');
    } else {
      var str = ',\n\tjsList: [' + JSON.stringify(url) + '],\n\tlaunchScene:';
      newSettings = settings.replace(/,\s*launchScene\s*:/, str);
    }
    if (newSettings === settings) {
      Editor.warn('Failed to send My Awesome SDK to the web preview.');
    }
    return newSettings;
  },

  getSettings(req, res, next) {
    let sendVendor = res.send;
    res.send = (content) => {
      content = this.insertSDK(content, Paths.sdkURL);
      content = this.insertSDK(content, "ccservices-scripts/cocos-analytics-init.js");
      sendVendor.call(res, content);
    };
    next();
  },

  getSDK(req, res) {
    res.setHeader("Content-Type", "text/javascript");
    if (req.params[0] === "cocos-analytics-init.js") {
      var analyticsInit = `(function () {
  let runIdx = 1;
  let timer = setInterval(() => {
    if (typeof cocosAnalytics !== 'undefined') {
      clearInterval(timer);
      cocosAnalytics.init({appID: '${appid}', storeID: '${store}',engine: 'cocos', callNumber: ''});
    }
  }, 100);
})();`;
      res.send(analyticsInit);
    } else
      res.sendFile(Paths.sdkPath);
  },

  hookPreviewServer() {
    if (this.router) {
      return;
    }
    this.router = Router();
    Editor.PreviewServer.userMiddlewares.push(this.router);
    this.router.get('/settings.js', this.getSettings.bind(this));
    this.router.get('/plugins/ccservices-scripts/*', this.getSDK.bind(this));
    this.router.get('/res/raw-ccservices-scripts/*', this.getSDK.bind(this));
  },

  unhookPreviewServer() {
    cc.js.array.remove(Editor.PreviewServer.userMiddlewares, this.router);
    this.router = null;
  },
};

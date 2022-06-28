"use strict";
cc._RF.push(module, '7a323cbW/RDn5Vj+kGqi/85', 'changeSence');
// javascript/引导 /changeSence.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  //当点击按钮时触发场景切换
  on_btn_onclick: function on_btn_onclick() {
    cc.director.loadScene("Scenes2");
    cc.log("change to Sences2");
  }
});

cc._RF.pop();
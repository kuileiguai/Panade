"use strict";
cc._RF.push(module, 'be07ejOKkpE+rXY0CQSZHzS', 'changeSence1');
// javascript/引导 /changeSence1.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  //当点击按钮时触发场景切换
  on_btn_onclick: function on_btn_onclick() {
    cc.director.loadScene("Scenes3");
    cc.log("change to Sences3");
  }
});

cc._RF.pop();
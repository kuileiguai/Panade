"use strict";
cc._RF.push(module, '3cade25m9FHarXVS25Jn7H7', 'changeSence5');
// javascript/引导 /changeSence5.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  //当点击按钮时触发场景切换
  on_btn_onclick: function on_btn_onclick() {
    cc.director.loadScene("Scenes7");
    cc.log("change to Sences7");
  }
});

cc._RF.pop();
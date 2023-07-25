"use strict";
cc._RF.push(module, '2f680F3kaFNF4vM1GBg7J/d', 'changeSence2');
// javascript/引导 /changeSence2.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  //当点击按钮时触发场景切换
  on_btn_onclick: function on_btn_onclick() {
    cc.director.loadScene("Scenes4");
    cc.log("change to Sences4");
  }
});

cc._RF.pop();
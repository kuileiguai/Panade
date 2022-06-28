"use strict";
cc._RF.push(module, '752b6H9LudAxJKNcl/+5CS7', 'changeSence3');
// javascript/引导 /changeSence3.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  //当点击按钮时触发场景切换
  on_btn_onclick: function on_btn_onclick() {
    cc.director.loadScene("Scenes5");
    cc.log("change to Sences5");
  }
});

cc._RF.pop();
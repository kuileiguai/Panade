"use strict";
cc._RF.push(module, '939aet66JZAl4zCWjRV96/D', 'chnageSence4');
// javascript/引导 /chnageSence4.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  //当点击按钮时触发场景切换
  on_btn_onclick: function on_btn_onclick() {
    cc.director.loadScene("Scenes6");
    cc.log("change to  Sences6");
  }
});

cc._RF.pop();
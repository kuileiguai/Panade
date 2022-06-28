// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        sprite_frame:{
            default: null,
            type:cc.SpriteFrame
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
       // let sprite = this.node.getComponent(cc.Sprite);
        //sprite.SpriteFrame = this.sprite_frame;
    },

    start () {

    },

    // update (dt) {},
});

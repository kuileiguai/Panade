cc.Class({
    extends: cc.Component,

    properties: {
        audioSource: {
            type: cc.AudioSource,
            default: null
            },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onClickMusic:function(target,data)
    {
        this.node = cc.find("Canvas/BackgroundMusic")

        if(data == 'open')
        {
            this.node.children[0].active = true
            this.node.children[1].active = false
            this.audioSource.resume();
        }
        if(data == 'close')
        {
            this.node.children[0].active = false
            this.node.children[1].active = true
            this.audioSource.pause();
        }
    },

    start () {

    },

    // update (dt) {},
});

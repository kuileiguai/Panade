cc.Class({
    extends: cc.Component,

    properties: {
        audioSource: cc.AudioSource
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let canvas = cc.find('Canvas');
        canvas.on('touchstart', this.playAudio, this);
    },
    playAudio () {
        this.audioSource.play();
    }

    // update (dt) {},
});

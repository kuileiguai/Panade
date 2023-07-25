cc.Class({
    extends: cc.Component,

    properties: {
        



    },

    onLoad () {
        this.camera = cc.find("Canvas/Main Camera");
        this.sun = cc.find("Canvas/竹笋");
        this.MENU = cc.find("Canvas/MENU");
        this.money = cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/money");
        this.music = cc.find("Canvas/BackgroundMusic");
        this.under = cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under");
        this.lose2 = cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/lose2");
        this.lose3 = cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/lose3");
    },

    callback:function(){

        for (let i = 20; i <=1160; i=i+20) {
            this.scheduleOnce(function () {
                this.camera.x = i;
                this.sun.x = this.sun.x + 20;
                this.MENU.x = this.MENU.x + 20;
                this.money.x = this.money.x + 20;
                this.music.x = this.music.x + 20;
            }, (0.7/1160) * i)
        }


       //this.MENU.x = 1160;
       this.under.x = 1160+17.821;
       this.lose2.x = 1160+17.821;
       this.lose3.x = 1160+17.821;
    },
    // LIFE-CYCLE CALLBACKS:

   

    start () {

    },

    // update (dt) {},
});

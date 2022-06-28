

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    onClickMenuIntroduction:function(target,data)
    {
        if(data == '虾饺')
        {
            this.node = cc.find("Canvas/MENU/menu/menu/虾饺介绍")
            cc.log(this.node.name)
            this.node.active = true;
        }
        if(data == '叉烧包')
        {  
            this.node = cc.find("Canvas/MENU/menu/menu/叉烧包介绍")
            this.node.active = true;
        }
        if(data == '碱水粽')
        {
            this.node = cc.find("Canvas/MENU/menu/menu/碱水粽介绍")
            this.node.active = true;
        }
        if(data == '红茶')
        {
            this.node = cc.find("Canvas/MENU/menu/menu/红茶介绍")
            this.node.active = true;
        }
        if(data == '绿茶')
        {
            this.node = cc.find("Canvas/MENU/menu/menu/绿茶介绍")
            this.node.active = true;
        }
        if(data == '春卷')
        {
            this.node = cc.find("Canvas/MENU/menu/menu/春卷介绍")
            this.node.active = true;
        }
        if(data == '菊花茶')
        {
            this.node = cc.find("Canvas/MENU/menu/menu/菊花茶介绍")
            this.node.active = true;
        }
        if(data == '马蹄糕')
        {
            this.node = cc.find("Canvas/MENU/menu/menu/马蹄糕介绍")
            this.node.active = true;

        }
    },

        onClickIntroductionclose:function(target,data)
        {
            if(data == 'close')
            {
                this.node.active = false
            }
        },

        

    // update (dt) {},
});

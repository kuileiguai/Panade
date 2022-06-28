cc.Class({
    extends: cc.Component,

    properties: {
        m_loginBg:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:
    

    onLoad () {
        this.m_loginBg.active = false
        //this.node.children[28].children[2].active = false

    },

    onClickLoginType:function(target, data){
        this.m_loginBg.active = true
        if(data == 'menuBotton')
        {
            this.node = cc.find("Canvas/MENU")
            this.node.children[1].active = true
        }
            
    },

    onClickLoginType1:function(target,data){
        if(data == 'close')
        {
            this.node.children[1].active = false
            this.m_loginBg.active = false
        }
    },


    start () {
    },

    // update (dt) {},
});

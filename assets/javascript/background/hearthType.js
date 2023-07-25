

cc.Class({
    extends: cc.Component,

    properties: {
 
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onClideHearthType(target, data)
    {
        if(data == 'select')
        {
            cc.log(this.node.children[0].name)
            this.node.children[0].active = true
        }

    },

    onClickHearthChange(target, data)
    {
        if(data == '1')
        {
            this.node.children[1].active = true
            this.node.children[2].active = false
            this.node.children[3].active = false
            this.node.children[0].active = false

        }
        if(data == '2')
        {
            this.node.children[1].active = false
            this.node.children[2].active = true
            this.node.children[3].active = false
            this.node.children[0].active = false
        }
        if(data == '3')
        {
            this.node.children[1].active = false
            this.node.children[2].active = false
            this.node.children[3].active = true
            this.node.children[0].active = false

        }
    },

    // update (dt) {},
});

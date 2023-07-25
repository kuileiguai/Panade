
cc.Class({
    extends: cc.Component,

    properties: {
        m_ProMaxLen:{
            default:500,
            type:cc.Integer,
        },
        m_Speed:{
            default:100,
            type:cc.Integer,
        },
        m_ProImage:cc.Node,

    },

    //规定进度条整体长度百分比0~1
    setProgress:function(pro)
    {
        if( pro > 1 || pro < 0 )
        {
            return  
        }
        this.m_SetWidth = this.m_ProMaxLen * pro
        //this.m_ProImage.width = setWidth

    },
    // LIFE-CYCLE CALLBACKS:
    
    onLoad () {
        this.m_ProImage.width = 0
    },

    start () {
    
    },

     update (dt) {
         if(this.m_ProImage.width < this.m_SetWidth)
         {
            this.m_ProImage.width += dt*this.m_Speed
         }
         else{
            setTimeout(function ()
            {
                cc.director.loadScene("Scenes1")
            
            }.bind(this), 500)
         }

     },
});



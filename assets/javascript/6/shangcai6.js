

const ball_skin = cc.Class({
    name:"Ball6",
    properties: {
    ball:{
        default:[],
        type:[cc.SpriteFrame]
    }
    }
});
cc.Class({
    extends: cc.Component,

    properties: {
      

        ball_sets:{
            default:[],
            type:[ball_skin]
        }

    },
    update: function() {
        
        var animal_6 = cc.sys.localStorage.getItem("animal_6");
        var ballSet = this.ball_sets[animal_6];
        var sprite  = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = ballSet.ball[0];

    },

   
    onLoad: function () {

        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; //这个node节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = "shangcai6";//这个是代码文件名
        clickEventHandler.handler = "callback";
        var button = this.node.getComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);

    },
     
    callback: function () {
        //如果点击了按钮，按钮透明度为0,且灶台上食物透明度变为255，后执行食物动画
        if( cc.find("Canvas/animal6/ball6").opacity!=0){
        cc.find("Canvas/animal6/ball6").opacity=0;
        cc.find("Canvas/animal6/ball").opacity=0;
        cc.find("Canvas/做菜6").opacity=255;
        var animal_6 = JSON.parse(cc.sys.localStorage.getItem("animal_6"));
    switch(animal_6){
        case 0:cc.find("Canvas/做菜6/叉烧包").opacity=255;
        break;
        case 1:cc.find("Canvas/做菜6/碱水粽").opacity=255;
        break;
        case 2:cc.find("Canvas/做菜6/红茶").opacity=255;
        break;
        case 3:cc.find("Canvas/做菜6/绿茶").opacity=255;
        break;
        case 4:cc.find("Canvas/做菜6/菊花茶").opacity=255;
        break;
        case 5:cc.find("Canvas/做菜6/虾饺").opacity=255;
        break;
        case 6:cc.find("Canvas/做菜6/马蹄糕").opacity=255;
        break;
        case 7:cc.find("Canvas/做菜6/春卷").opacity=255;
        break;
        default:break;
    }

         cc.find("Canvas/做菜6").getComponent(cc.Animation).play('food6');
        //计时5秒
        setTimeout(()=>{
            cc.find("Canvas/animal6").getComponent(cc.Animation).resume('way51');
            cc.find("Canvas/做菜6").opacity=0;
            switch(animal_6){
                case 0:cc.find("Canvas/做菜6/叉烧包").opacity=0;
                break;
                case 1:cc.find("Canvas/做菜6/碱水粽").opacity=0;
                break;
                case 2:cc.find("Canvas/做菜6/红茶").opacity=0;
                break;
                case 3:cc.find("Canvas/做菜6/绿茶").opacity=0;
                break;
                case 4:cc.find("Canvas/做菜6/菊花茶").opacity=0;
                break;
                case 5:cc.find("Canvas/做菜6/虾饺").opacity=0;
                break;
                case 6:cc.find("Canvas/做菜6/马蹄糕").opacity=0;
                break;
                case 7:cc.find("Canvas/做菜6/春卷").opacity=0;
                break;
                default:break;
            }
               cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/sun6").opacity=255;
        }, 4000);
     
             animal_6 = JSON.parse(cc.sys.localStorage.getItem("animal_6"));
             this.ballSet = this.ball_sets[animal_6];
 

    }
}
});

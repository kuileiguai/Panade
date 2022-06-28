const ball_skin = cc.Class({
    name:"Ball",
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
        
        var animal_1 = JSON.parse(cc.sys.localStorage.getItem("animal_1"));
        var ballSet = this.ball_sets[animal_1];
        var sprite  = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = ballSet.ball[0];

    },

   
    onLoad: function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node; //这个node节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = "shangcai1";//这个是代码文件名
        clickEventHandler.handler = "callback";
        var button = this.node.getComponent(cc.Button);
        button.clickEvents.push(clickEventHandler);
 

    },
     
    callback: function () {
        //如果点击了按钮，按钮透明度为0,且灶台上食物透明度变为255，后执行食物动画
        if( cc.find("Canvas/animal1/ball1").opacity!=0){
        cc.find("Canvas/animal1/ball1").opacity=0;
        cc.find("Canvas/animal1/ball").opacity=0;
        cc.find("Canvas/做菜1").opacity=255;
       //cc.log(Animal.return_ready);
       var animal_1 = JSON.parse(cc.sys.localStorage.getItem("animal_1"));
    switch(animal_1){
        case 0:cc.find("Canvas/做菜1/叉烧包").opacity=255;
        break;
        case 1:cc.find("Canvas/做菜1/碱水粽").opacity=255;
        break;
        case 2:cc.find("Canvas/做菜1/红茶").opacity=255;
        break;
        case 3:cc.find("Canvas/做菜1/绿茶").opacity=255;
        break;
        case 4:cc.find("Canvas/做菜1/菊花茶").opacity=255;
        break;
        case 5:cc.find("Canvas/做菜1/虾饺").opacity=255;
        break;
        case 6:cc.find("Canvas/做菜1/马蹄糕").opacity=255;
        break;
        case 7:cc.find("Canvas/做菜1/春卷").opacity=255;
        break;
        default:break;
        }
   

        cc.find("Canvas/做菜1").getComponent(cc.Animation).play('food1');
        //计时5秒
        setTimeout(()=>{
            cc.find("Canvas/animal1").getComponent(cc.Animation).resume('way01');
            cc.find("Canvas/做菜1").opacity=0;
            switch(animal_1){
                case 0:cc.find("Canvas/做菜1/叉烧包").opacity=0;
                break;
                case 1:cc.find("Canvas/做菜1/碱水粽").opacity=0;
                break;
                case 2:cc.find("Canvas/做菜1/红茶").opacity=0;
                break;
                case 3:cc.find("Canvas/做菜1/绿茶").opacity=0;
                break;
                case 4:cc.find("Canvas/做菜1/菊花茶").opacity=0;
                break;
                case 5:cc.find("Canvas/做菜1/虾饺").opacity=0;
                break;
                case 6:cc.find("Canvas/做菜1/马蹄糕").opacity=0;
                break;
                case 7:cc.find("Canvas/做菜1/春卷").opacity=0;
                break;
                default:break;
            }
            cc.find("Canvas/收集1/sun1").opacity=255;
        }, 4000);
        
             animal_1 = JSON.parse(cc.sys.localStorage.getItem("animal_1"));
             this.ballSet = this.ball_sets[animal_1];
    }
}

});

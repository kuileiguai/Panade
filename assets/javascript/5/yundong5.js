const animal5_skin = cc.Class({
    name:"Animal5",
    properties: {
    animal:{
        default:[],
        type:[cc.SpriteFrame]
    }
    }
});

cc.Class({

    extends: cc.Component,
    
    properties: {
        animal_sets:{
            default:[],
            type:[animal5_skin]
            
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.intervalTime = 0;
        this.return_ready = Math.floor(Math.random()*8);    
        //
        cc.sys.localStorage.setItem("animal_5",this.return_ready);
        //
    },

     start () {
        
         var W05 = this.getComponent(cc.Animation);
         var kknode = cc.find("Canvas/animal5/ball5");
         kknode.opacity = 0;
         cc.find("Canvas/animal5/ball").opacity=0;
         W05.play('way41');
     },

    update (dt) {
        this.intervalTime+=dt;
        var index = Math.floor(this.intervalTime /0.6);
        index = index%2;
        var animalSet = this.animal_sets[this.return_ready];
        var sprite  = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = animalSet.animal[index];
    },
    
    turn: function(){
        cc.find("Canvas/animal5").scaleX=-0.2;
        cc.find("Canvas/animal5").anchorX=0.3;
     }, 

     turnback: function(){
        cc.find("Canvas/animal5").scaleX=0.2;
        cc.find("Canvas/animal5").anchorX=0.5;
     }, 

     stop5: function(){
        if(cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/sun5").opacity!=0){
        cc.find("Canvas/animal5").getComponent(cc.Animation).pause('way41');
        }
    },

    TanChu: function(){
        var W04 = this.getComponent(cc.Animation);
        cc.find("Canvas/animal5/ball5").opacity=255;
        cc.find("Canvas/animal5/ball").opacity=255;
        W04.pause('way41');

    },

    return_way5: function(){
    this.return_ready = Math.floor(Math.random()*8);
    cc.sys.localStorage.setItem("animal_5",this.return_ready);
     },

     Go5: function(){
        var W05 = this.getComponent(cc.Animation);
        W05.pause('way41');
        setTimeout(()=>{
            W05.resume('way41');
        }, Math.random()*6000+7000);
     }

});

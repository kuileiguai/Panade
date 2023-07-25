const animal_skin = cc.Class({
    name:"Animal",
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
            type:[animal_skin]
            
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.intervalTime = 0;
        this.return_ready = Math.floor(Math.random()*8);    
        //
        cc.sys.localStorage.setItem("animal_1",this.return_ready);
        //
    },

     start () {
        
         var W01 = this.getComponent(cc.Animation);
         cc.find("Canvas/animal1/ball1").opacity = 0;
         cc.find("Canvas/animal1/ball").opacity = 0;
            W01.play('way01');
     },

    update (dt) {
        this.intervalTime+=dt;
        var index = Math.floor(this.intervalTime /0.6);
        index = index%2;
        var animalSet = this.animal_sets[this.return_ready];
        var sprite  = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = animalSet.animal[index];
    },

    stop1: function(){
        if(cc.find("Canvas/收集1/sun1").opacity!=0){
        cc.find("Canvas/animal1").getComponent(cc.Animation).pause('way01');
        }
    },

    TanChu: function(){
        var W01 = this.getComponent(cc.Animation);
        cc.find("Canvas/animal1/ball1").opacity=255;
        cc.find("Canvas/animal1/ball").opacity=255;
        W01.pause('way01');

    },

    return_way1: function(){
    this.return_ready = Math.floor(Math.random()*8);
    cc.sys.localStorage.setItem("animal_1",this.return_ready);
     }



});

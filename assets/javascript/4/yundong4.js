const animal4_skin = cc.Class({
    name:"Animal4",
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
            type:[animal4_skin]
            
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.intervalTime = 0;
        this.return_ready = Math.floor(Math.random()*8);    
        cc.sys.localStorage.setItem("animal_4",this.return_ready);
    },

     start () {
        
         var W04 = this.getComponent(cc.Animation);
         cc.find("Canvas/animal4/ball4").opacity = 0;
         cc.find("Canvas/animal4/ball").opacity=0;
         W04.play('way31');
     },

    update (dt) {
        this.intervalTime+=dt;
        var index = Math.floor(this.intervalTime /0.6);
        index = index%2;
        var animalSet = this.animal_sets[this.return_ready];
        var sprite  = this.node.getComponent(cc.Sprite);
        sprite.spriteFrame = animalSet.animal[index];
    },
    
    TanChu: function(){
       cc.find("Canvas/animal4").scaleX=0.2;

        var W04 = this.getComponent(cc.Animation);
        cc.find("Canvas/animal4/ball4").opacity=255;
        cc.find("Canvas/animal4/ball").opacity=255;
        W04.pause('way31');

    },

    stop4: function(){
        if(cc.find("Canvas/收集1/收集2/收集3/收集4/sun4").opacity!=0){
        cc.find("Canvas/animal4").getComponent(cc.Animation).pause('way31');
        }
    },

    return_way4: function(){
    this.return_ready = Math.floor(Math.random()*8);
    cc.sys.localStorage.setItem("animal_4",this.return_ready);
     },

     Go4: function(){
        var W04 = this.getComponent(cc.Animation);
        W04.pause('way31');
        setTimeout(()=>{
            W04.resume('way31');
        }, Math.random()*5000+8000);
     }

});

const animal2_skin = cc.Class({
    name:"Animal2",
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
            type:[animal2_skin]
            
        }
    },

    onLoad () {
        this.intervalTime = 0;
        this.return_ready = Math.floor(Math.random()*8);    
        //
        cc.sys.localStorage.setItem("animal_2",this.return_ready);
        //
    },

     start () {
        
         var W02 = this.getComponent(cc.Animation);
         cc.find("Canvas/animal2/ball2").opacity = 0;
         cc.find("Canvas/animal2/ball").opacity = 0;
         W02.play('way11');
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
        cc.find("Canvas/animal2").scaleX=-0.2;
        cc.find("Canvas/animal2").anchorX=0.3;
     },
     
    stop2: function(){
        if(cc.find("Canvas/收集1/收集2/sun2").opacity!=0){
        cc.find("Canvas/animal2").getComponent(cc.Animation).pause('way11');
        }
    },

    TanChu: function(){
        cc.find("Canvas/animal2").scaleX=0.2;
        cc.find("Canvas/animal2").anchorX=0.5;
        var W02 = this.getComponent(cc.Animation);
        cc.find("Canvas/animal2/ball2").opacity=255;
        cc.find("Canvas/animal2/ball").opacity=255;
        W02.pause('way11');

    },

    return_way2: function(){
    this.return_ready = Math.floor(Math.random()*8);
    cc.sys.localStorage.setItem("animal_2",this.return_ready);
     },

     Go2: function(){
        var W02 = this.getComponent(cc.Animation);
        W02.pause('way11');
        setTimeout(()=>{
            W02.resume('way11');
        },3000);
     }

});

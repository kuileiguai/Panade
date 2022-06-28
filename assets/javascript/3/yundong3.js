const animal3_skin = cc.Class({
    name:"Animal3",
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
            type:[animal3_skin]
            
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.intervalTime = 0;
        this.return_ready = Math.floor(Math.random()*8);    
        //
        cc.sys.localStorage.setItem("animal_3",this.return_ready);
        //
    },

     start () {
        
         var W03 = this.getComponent(cc.Animation);
         cc.find("Canvas/animal3/ball3").opacity = 0;
         cc.find("Canvas/animal3/ball").opacity = 0;
         W03.play('way21');
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

       cc.find("Canvas/animal3").scaleX=-0.2;
       cc.find("Canvas/animal3").anchorX=0.3;

    },

    stop3: function(){
        if(cc.find("Canvas/收集1/收集2/收集3/sun3").opacity!=0){
        cc.find("Canvas/animal3").getComponent(cc.Animation).pause('way21');
        }
    },

    TanChu: function(){
       cc.find("Canvas/animal3").scaleX=0.2;
       cc.find("Canvas/animal3").anchorX=0.5;
        var W03 = this.getComponent(cc.Animation);
        cc.find("Canvas/animal3/ball3").opacity=255;
        cc.find("Canvas/animal3/ball").opacity=255;
        W03.pause('way21');

    },

    return_way3: function(){
    this.return_ready = Math.floor(Math.random()*8);
    cc.sys.localStorage.setItem("animal_3",this.return_ready);
    cc.log(this.return_ready);
     },

     Go3: function(){
        var W03 = this.getComponent(cc.Animation);
        W03.pause('way21');
        setTimeout(()=>{
            W03.resume('way21');
        },5000);
     }

});

const animal6_skin = cc.Class({
    name:"Animal6",
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
            type:[animal6_skin]
            
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.intervalTime = 0;
        this.return_ready = Math.floor(Math.random()*8);    
        //
        cc.sys.localStorage.setItem("animal_6",this.return_ready);
        //
    },

     start () {
        
         var W06 = this.getComponent(cc.Animation);
         cc.find("Canvas/animal6/ball6").opacity = 0;
         cc.find("Canvas/animal6/ball").opacity=0;
         W06.play('way51');
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
        cc.find("Canvas/animal6").scaleX=-0.2;
     },

    TanChu: function(){
       cc.find("Canvas/animal6").scaleX=0.2;
        var W06 = this.getComponent(cc.Animation);
        cc.find("Canvas/animal6/ball6").opacity=255;
        cc.find("Canvas/animal6/ball").opacity=255;
        W06.pause('way51');
    },
    
    stop6: function(){
        if(cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/sun6").opacity!=0){
        cc.find("Canvas/animal6").getComponent(cc.Animation).pause('way51');
        }
    },

    return_way6: function(){
    this.return_ready = Math.floor(Math.random()*8);
    cc.sys.localStorage.setItem("animal_6",this.return_ready);
     },

     Go6: function(){
        var W06 = this.getComponent(cc.Animation);
        W06.pause('way51');
        setTimeout(()=>{
            W06.resume('way51');
        }, Math.random()*5000+9000);
     }

});

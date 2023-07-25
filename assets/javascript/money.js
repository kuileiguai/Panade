var a;
var num;
var pd2_1;var pd2_2;var pd2_3;var pd2_4;var pd2_5;var pd2_6;//2_1表示第1张桌子换成第2类桌子
var pd3_1;var pd3_2;var pd3_3;var pd3_4;var pd3_5;var pd3_6;//3_1表示第1张桌子换成第3类桌子
var pd4_1;var pd4_2;var pd4_3;//4_1表示第1个灶台换成第2类灶台
var pd5_1;var pd5_2;var pd5_3;//5_1表示第1个灶台换成第3类灶台
cc.Class({
   
    extends: cc.Component,

    properties: {
        money: cc.Node,
        sun: cc.Node,
        lose2:cc.Node,
        lose3:cc.Node,

    },
    update: function() {
        var animal_1 = JSON.parse(cc.sys.localStorage.getItem("animal_1"));
        var animal_2 = cc.sys.localStorage.getItem("animal_2");
        this.animal_3 = cc.sys.localStorage.getItem("animal_3");
        this.animal_4 = cc.sys.localStorage.getItem("animal_4");
        this.animal_5 = cc.sys.localStorage.getItem("animal_5");
        this.animal_6 = cc.sys.localStorage.getItem("animal_6");
        cc.sys.localStorage.setItem("zhusun_number",this.money.getComponent(cc.Label).string);
    },
    onLoad() {
        pd2_1=0;pd2_2=0;pd2_3=0;pd2_4=0;pd2_5=0;pd2_6=0;
        pd3_1=0;pd3_2=0;pd3_3=0;pd3_4=0;pd3_5=0;pd3_6=0;
        pd4_1=0;pd4_2=0;pd4_3=0;
        pd5_1=0;pd5_2=0;pd5_3=0;

        if(cc.sys.localStorage.getItem("zhusun_number")==null){
            this.money.getComponent(cc.Label).string = 0;
            num = 0;
            a = num;
        }
        else{
            this.money.getComponent(cc.Label).string = cc.sys.localStorage.getItem("zhusun_number");
            num = this.money.getComponent(cc.Label).string;
            a = num;
        }
 
        var animal_1 = JSON.parse(cc.sys.localStorage.getItem("animal_1"));
        var animal_2 = cc.sys.localStorage.getItem("animal_2");
        this.animal_3 = cc.sys.localStorage.getItem("animal_3");
        this.animal_4 = cc.sys.localStorage.getItem("animal_4");
        this.animal_5 = cc.sys.localStorage.getItem("animal_5");
        this.animal_6 = cc.sys.localStorage.getItem("animal_6");
    },
    onClickBtadd1() {
        if(cc.find("Canvas/收集1/sun1").opacity!=0){
        
            cc.find("Canvas/收集1/sun1").opacity=0;
            if(cc.find("Canvas/animal1").getComponent(cc.Animation).getAnimationState('way01').isPaused==true){
                
                cc.find("Canvas/animal1").getComponent(cc.Animation).resume('way01'); 
            }
        num = a;
        var animal_1 = JSON.parse(cc.sys.localStorage.getItem("animal_1"));
        var count;
        switch (animal_1) {
            case 0: count = 10
                break;
            case 1: count = 10
                break;
            case 2: count = 20
                break;
            case 3: count = 20
                break;
            case 4: count = 30
                break;
            case 5: count = 30
                break;
            case 6: count = 40
                break;
            case 7: count = 40
                break;
            default:break;
        }

            for (let i = 0; i < count; i++) {
                this.scheduleOnce(function () {
                    a++;
                    num++;
                    this.money.getComponent(cc.Label).string = num;
                }, (0.8 / count) * i);
            }
         }
     },
     onClickBtadd2() {
        if(cc.find("Canvas/收集1/收集2/sun2").opacity!=0){
        
            cc.find("Canvas/收集1/收集2/sun2").opacity=0;
            if(cc.find("Canvas/animal2").getComponent(cc.Animation).getAnimationState('way11').isPaused==true){
                
                cc.find("Canvas/animal2").getComponent(cc.Animation).resume('way11'); 
            }
        num = a;
        var animal_2 = JSON.parse(cc.sys.localStorage.getItem("animal_2"));
        var count;
        switch (animal_2) {
            case 0: count = 10
                break;
            case 1: count = 10
                break;
            case 2: count = 20
                break;
            case 3: count = 20
                break;
            case 4: count = 30
                break;
            case 5: count = 30
                break;
            case 6: count = 40
                break;
            case 7: count = 40
                break;
            default:break;
        }

            for (let i = 0; i < count; i++) {
                this.scheduleOnce(function () {
                    a++;
                    num++;
                    this.money.getComponent(cc.Label).string = num;
                }, (0.8 / count) * i);
            }
         }
     },
     onClickBtadd3() {
        if(cc.find("Canvas/收集1/收集2/收集3/sun3").opacity!=0){
        
            cc.find("Canvas/收集1/收集2/收集3/sun3").opacity=0;
            if(cc.find("Canvas/animal3").getComponent(cc.Animation).getAnimationState('way21').isPaused==true){
                
                cc.find("Canvas/animal3").getComponent(cc.Animation).resume('way21'); 
            }
        num = a;
        var animal_3 = JSON.parse(cc.sys.localStorage.getItem("animal_3"));
        var count;
        switch (animal_3) {
            case 0: count = 10
                break;
            case 1: count = 10
                break;
            case 2: count = 20
                break;
            case 3: count = 20
                break;
            case 4: count = 30
                break;
            case 5: count = 30
                break;
            case 6: count = 40
                break;
            case 7: count = 40
                break;
            default:break;
        }

            for (let i = 0; i < count; i++) {
                this.scheduleOnce(function () {
                    a++;
                    num++;
                    this.money.getComponent(cc.Label).string = num;
                }, (0.8 / count) * i);
            }
         }
     },
     onClickBtadd4() {
        if(cc.find("Canvas/收集1/收集2/收集3/收集4/sun4").opacity!=0){
        
            cc.find("Canvas/收集1/收集2/收集3/收集4/sun4").opacity=0;
            if(cc.find("Canvas/animal4").getComponent(cc.Animation).getAnimationState('way31').isPaused==true){
                
                cc.find("Canvas/animal4").getComponent(cc.Animation).resume('way31'); 
            }
        num = a;
        var animal_4 = JSON.parse(cc.sys.localStorage.getItem("animal_4"));
        var count;
        switch (animal_4) {
            case 0: count = 10
                break;
            case 1: count = 10
                break;
            case 2: count = 20
                break;
            case 3: count = 20
                break;
            case 4: count = 30
                break;
            case 5: count = 30
                break;
            case 6: count = 40
                break;
            case 7: count = 40
                break;
            default:break;
        }

            for (let i = 0; i < count; i++) {
                this.scheduleOnce(function () {
                    a++;
                    num++;
                    this.money.getComponent(cc.Label).string = num;
                }, (0.8 / count) * i);
            }
         }
     },
     onClickBtadd5() {
        if(cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/sun5").opacity!=0){
        
            cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/sun5").opacity=0;
            if(cc.find("Canvas/animal5").getComponent(cc.Animation).getAnimationState('way41').isPaused==true){
                
                cc.find("Canvas/animal5").getComponent(cc.Animation).resume('way41'); 
            }
        num = a;
        var animal_5 = JSON.parse(cc.sys.localStorage.getItem("animal_5"));
        var count;
        switch (animal_5) {
            case 0: count = 10
                break;
            case 1: count = 10
                break;
            case 2: count = 20
                break;
            case 3: count = 20
                break;
            case 4: count = 30
                break;
            case 5: count = 30
                break;
            case 6: count = 40
                break;
            case 7: count = 40
                break;
            default:break;
        }

            for (let i = 0; i < count; i++) {
                this.scheduleOnce(function () {
                    a++;
                    num++;
                    this.money.getComponent(cc.Label).string = num;
                }, (0.8 / count) * i);
            }
         }
     },
     onClickBtadd6() {
        if(cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/sun6").opacity!=0){
           
            cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/sun6").opacity=0;

            if(cc.find("Canvas/animal6").getComponent(cc.Animation).getAnimationState('way51').isPaused==true){
                
                cc.find("Canvas/animal6").getComponent(cc.Animation).resume('way51'); 
            }
        num = a;
        var animal_6 = JSON.parse(cc.sys.localStorage.getItem("animal_6"));
        var count;
        switch (animal_6) {
            case 0: count = 10
                break;
            case 1: count = 10
                break;
            case 2: count = 20
                break;
            case 3: count = 20
                break;
            case 4: count = 30
                break;
            case 5: count = 30
                break;
            case 6: count = 40
                break;
            case 7: count = 40
                break;
            default:break;
        }

            for (let i = 0; i < count; i++) {
                this.scheduleOnce(function () {
                    a++;
                    num++;
                    this.money.getComponent(cc.Label).string = num;
                }, (0.8 / count) * i);
            }

         }
     },

    onClickBtcut2(target, data) {
        num = a;
        var count= 100;
        if (num - count < 0) {
            if(data == 1&&pd2_1 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose2.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose2.opacity = 0;
                },1200)
            }
            if(data == 2&&pd2_2 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose2.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose2.opacity = 0;
                },1200)
            }
            if(data == 3&&pd2_3 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose2.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose2.opacity = 0;
                },1200)
            }
            if(data == 4&&pd2_4 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose2.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose2.opacity = 0;
                },1200)
            }
            if(data == 5&&pd2_5 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose2.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose2.opacity = 0;
                },1200)
            }
            if(data == 6&&pd2_6 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose2.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose2.opacity = 0;
                },1200)
            }
            if(data == 7&&pd4_1 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose2.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose2.opacity = 0;
                },1200)
            }
            if(data == 8&&pd4_2 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose2.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose2.opacity = 0;
                },1200)
            }
            if(data == 9&&pd4_3 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose2.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose2.opacity = 0;
                },1200)
            }
        }
        else {
            if(data == 1&&pd2_1 == 0){
                pd2_1=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
            if(data == 2&&pd2_2 == 0){
                pd2_2=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
            if(data == 3&&pd2_3 == 0){
                pd2_3=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8/ count) * i)
                }
            }
            if(data == 4&&pd2_4 == 0){
                pd2_4=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
            if(data == 5&&pd2_5 == 0){
                pd2_5=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8/ count) * i)
                }
            }
            if(data == 6&&pd2_6 == 0){
                pd2_6=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
            if(data == 7&&pd4_1 == 0){
                pd4_1=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
            if(data == 8&&pd4_2 == 0){
                pd4_2=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
            if(data == 9&&pd4_3 == 0){
                pd4_3=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
           
        }
     },
     onClickBtcut3(target, data) {
        num = a;
        var count = 300;
        if (num - count < 0) {
            if(data == 1&&pd3_1 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose3.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose3.opacity = 0;
                },1200)
            }
            if(data == 2&&pd3_2 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose3.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose3.opacity = 0;
                },1200)
            }
            if(data == 3&&pd3_3 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose3.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose3.opacity = 0;
                },1200)
            }
            if(data == 4&&pd3_4 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose3.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose3.opacity = 0;
                },1200)
            }
            if(data == 5&&pd3_5 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose3.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose3.opacity = 0;
                },1200)
            }
            if(data == 6&&pd3_6 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose3.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose3.opacity = 0;
                },1200)
            }
            if(data == 7&&pd5_1 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose3.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose3.opacity = 0;
                },1200)
            }
            if(data == 8&&pd5_2 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose3.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose3.opacity = 0;
                },1200)
            }
            if(data == 9&&pd5_3 == 0){
                this.scheduleOnce(function () {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=130;
                    this.lose3.opacity = 255;
                }, this.moveTime / 0.1)
                setTimeout(() => {
                    cc.find("Canvas/收集1/收集2/收集3/收集4/收集5/收集6/hearth/under").opacity=0;
                    this.lose3.opacity = 0;
                },1200)
            }
        }
        else {
            
            if(data == 1&&pd3_1 == 0){
                pd3_1=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
            if(data == 2&&pd3_2 == 0){
                pd3_2=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
            if(data == 3&&pd3_3 == 0){
                pd3_3=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
            if(data == 4&&pd3_4 == 0){
                pd3_4=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
            if(data == 5&&pd3_5 == 0){
                pd3_5=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
            if(data == 6&&pd3_6 == 0){
                pd3_6=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
            if(data == 7&&pd5_1 == 0){
                pd5_1=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
            if(data == 8&&pd5_2 == 0){
                pd5_2=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8/ count) * i)
                }
            }
            if(data == 9&&pd5_3 == 0){
                pd5_3=1; 
                for (let i = 0; i < count; i++) {
                    this.scheduleOnce(function () {
                        a--;
                        num--;
                        this.money.getComponent(cc.Label).string = num;
                    }, (0.8 / count) * i)
                }
            }
           
        }
     },

     onClideDeskType(target, data)
     {
         if(data == 'select')
         {
             cc.log(this.node.children[0].name)
             this.node.children[0].active = true
         }
 
     },
 
     onClickDeskChange(target, data)
     {
         if(data == 1)
         {
             this.node.children[1].active = true
             this.node.children[2].active = false
             this.node.children[3].active = false
             this.node.children[0].active = false
 
         }
         if(data == '2_1'&&pd2_1)
         {
             this.node.children[1].active = false
             this.node.children[2].active = true
             this.node.children[3].active = false
             this.node.children[0].active = false
         }
         if(data == '2_2'&&pd2_2)
         {
             this.node.children[1].active = false
             this.node.children[2].active = true
             this.node.children[3].active = false
             this.node.children[0].active = false
         }
         if(data == '2_3'&&pd2_3)
         {
             this.node.children[1].active = false
             this.node.children[2].active = true
             this.node.children[3].active = false
             this.node.children[0].active = false
         }
         if(data == '2_4'&&pd2_4)
         {
             this.node.children[1].active = false
             this.node.children[2].active = true
             this.node.children[3].active = false
             this.node.children[0].active = false
         }
         if(data == '2_5'&&pd2_5)
         {
             this.node.children[1].active = false
             this.node.children[2].active = true
             this.node.children[3].active = false
             this.node.children[0].active = false
         }
         if(data == '2_6'&&pd2_6)
         {
             this.node.children[1].active = false
             this.node.children[2].active = true
             this.node.children[3].active = false
             this.node.children[0].active = false
         }

         if(data == '3_1'&&pd3_1)
         {
             this.node.children[1].active = false
             this.node.children[2].active = false
             this.node.children[3].active = true
             this.node.children[0].active = false
 
         }
         if(data == '3_2'&&pd3_2)
         {
             this.node.children[1].active = false
             this.node.children[2].active = false
             this.node.children[3].active = true
             this.node.children[0].active = false
 
         }
         if(data == '3_3'&&pd3_3)
         {
             this.node.children[1].active = false
             this.node.children[2].active = false
             this.node.children[3].active = true
             this.node.children[0].active = false
 
         }
         if(data == '3_4'&&pd3_4)
         {
             this.node.children[1].active = false
             this.node.children[2].active = false
             this.node.children[3].active = true
             this.node.children[0].active = false
 
         }
         if(data == '3_5'&&pd3_5)
         {
             this.node.children[1].active = false
             this.node.children[2].active = false
             this.node.children[3].active = true
             this.node.children[0].active = false
 
         }
         if(data == '3_6'&&pd3_6)
         {
             this.node.children[1].active = false
             this.node.children[2].active = false
             this.node.children[3].active = true
             this.node.children[0].active = false
 
         }
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
        if(data == '4_1'&&pd4_1)
        {
            this.node.children[1].active = false
            this.node.children[2].active = true
            this.node.children[3].active = false
            this.node.children[0].active = false
        }
        if(data == '4_2'&&pd4_2)
        {
            this.node.children[1].active = false
            this.node.children[2].active = true
            this.node.children[3].active = false
            this.node.children[0].active = false
        }
        if(data == '4_3'&&pd4_3)
        {
            this.node.children[1].active = false
            this.node.children[2].active = true
            this.node.children[3].active = false
            this.node.children[0].active = false
        }
        if(data == '5_1'&&pd5_1)
        {
            this.node.children[1].active = false
            this.node.children[2].active = false
            this.node.children[3].active = true
            this.node.children[0].active = false
        }
        if(data == '5_2'&&pd5_2)
        {
            this.node.children[1].active = false
            this.node.children[2].active = false
            this.node.children[3].active = true
            this.node.children[0].active = false
        }
        if(data == '5_3'&&pd5_3)
        {
            this.node.children[1].active = false
            this.node.children[2].active = false
            this.node.children[3].active = true
            this.node.children[0].active = false
        }
    },

});
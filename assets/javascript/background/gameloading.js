
cc.Class({
    extends: cc.Component,

    properties: {
        m_BackGround:cc.Node,
        m_LoadingPrefab:cc.Prefab,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.m_Loading = cc.instantiate(this.m_LoadingPrefab)
        this.m_BackGround.addChild(this.m_Loading)
        this.m_Loading.y = -26
        this.m_Loading = this.m_Loading.getComponent('loading')
        this.m_Loading.setProgress(1)
    },

    start () {

    },

    //update (dt) { },
});

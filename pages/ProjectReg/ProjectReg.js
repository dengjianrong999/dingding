Page({
  data: {
    Lists: [
      {
        name: "乌鲁木齐西西宇环保有限公司项目",
        number: "022334560",
        status: "审批中",
        creater: "张三",
        cseaterTime: "2019-04-05 12:23:34",
      },
      {
        name: "乌鲁木齐西西宇环保有限公司项目",
        number: "022334560",
        status: "已通过",
        creater: "张三",
        cseaterTime: "2019-04-05 12:23:34",
      },
      {
        name: "乌鲁木齐西西宇环保有限公司项目",
        number: "022334560",
        status: "已提交",
        creater: "张三",
        cseaterTime: "2019-04-05 12:23:34",
      },
      {
        name: "乌鲁木齐西西宇环保有限公司项目",
        number: "022334560",
        status: "不通过",
        creater: "张三",
        cseaterTime: "2019-04-05 12:23:34",
      },
    ],
    lisr:[ {
        name: "乌鲁木齐西西宇环保有限公司项目",
        number: "022334560",
        status: "审批中",
        creater: "张三",
        cseaterTime: "2019-04-05 12:23:34",
      },
      {
        name: "乌鲁木齐西西宇环保有限公司项目",
        number: "022334560",
        status: "已通过",
        creater: "张三",
        cseaterTime: "2019-04-05 12:23:34",
      },]

  },
  onLoad() { },
  onPullDownRefresh() {
    console.log('xiala')
    // 页面被下拉
  },
  onReachBottom() {
    console.log('bot')
    var that = this;
    setTimeout(function(){
         that.setData({
           Lists:that.data.Lists.concat(that.data.lisr)
         })
    },1000)
    // 页面被拉到底部
  },
  linkToAdd() {
    dd.navigateTo({
      url: "../ProjectRegMess/ProjectRegMess?isShow=1"
    })
  },
  LinkToreg() {
    dd.navigateTo({
      url: "../ProjectRegMess/ProjectRegMess?isShow=2"
    })

  }
});

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
    ]
  },
  onLoad() {
   
  },
  LinkToreg() {
    dd.navigateTo({
      url: "../JurisdictionManMess/JurisdictionManMess?title=项目人员信息"
    })
  }
});

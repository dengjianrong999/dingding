Page({
  data: {
    Lists: [
      {
        name: "张三",
        type: "日报",
        status: "已提交",
        cseaterTime: "2019-04-05 12:23:34",
      },
      {
        name: "张三",
        type: "日报",
        status: "未提交",
        cseaterTime: "2019-04-05 12:23:34",
      },
    ]
  },
  onLoad() { },
  LinkToreg(){
     dd.navigateTo({
          url: "../dailyPaperMess/dailyPaperMess"
    })
  }
});

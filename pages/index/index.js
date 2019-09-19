Page({

  data: {

  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    console.log('onPullDownRefresh', new Date())
    // 页面被下拉
  },

  onReachBottom() {
   


    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },

  // 项目登记管理
  LinkToProReg() {
    dd.navigateTo({
      url: "../ProjectReg/ProjectReg"
    })
  },
  // 项目库管理
  LinkToProKu() {
    dd.navigateTo({
      url: "../ProjectKu/ProjectKu"
    })
  },
  // 项目库权限
  LinkToProQX() {
    dd.navigateTo({
      url: "../JurisdictionMan/JurisdictionMan"
    })
  },
  // 项目人员分配
  LinkToProPeople() {
    dd.navigateTo({
      url: "../ProjectPersonMan/ProjectPersonMan"
    })
  },
  // 个人日报
  LinkToDailyPaper() {
    dd.navigateTo({
      url: "../dailyPaper/dailyPaper"
    })
  },
  // 项目成本核算
  LinkToProCost() {
    dd.navigateTo({
      url: "../ProjectCost/ProjectCost"
    })
  },
});

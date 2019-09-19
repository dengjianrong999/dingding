Page({
  data: {
    selectBoxIShow: false,
    people: [],
    array: ['新疆有限公司项目', '新疆有限公司项目2', '新疆有限公司项目3', '新疆有限公司项目4'],
    index: 0
  },
  onLoad(option) {
    dd.setNavigationBar({
      title: option.title
    })
  },
  isSshowTrue() {
    this.setData({
      selectBoxIShow: true,
    })
  },
  formSubmit(e) {
    console.log(e)
    this.setData({
      selectBoxIShow: false,
      people: e.detail.value.checkbox1
    })
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e);
    this.setData({
      index: e.detail.value,
    });
  },
  saveMess(e) {
   console.log(e.detail.value)
  },
});

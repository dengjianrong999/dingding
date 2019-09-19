Page({
  data: {
    dateTime: '2019-12-11',
    array: ['日报', '周报'],
    index: 0,
    projectList: ['乌鲁木齐有限公司项目', '乌鲁木齐有限公司项目', '乌鲁木齐有限公司项目'],
    projectIndex: 0
  },
  onLoad() { },
  datePicker() {
    dd.datePicker({
      // currentDate: '2016-10-10',
      startDate: '2016-10-9',
      endDate: '2019-10-9',
      success: (res) => {
        this.setData({
          dateTime: res.date
        })
      },
    });

  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  projectChangee() {
    this.setData({
      projectIndex: e.detail.value,
    });
  }
});


Page({
  data: {
    select: 1,
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
      {
        name: "乌鲁木齐西西宇环保有限公司项目",
        number: "022334560",
        status: "不通过",
        creater: "张三",
        cseaterTime: "2019-04-05 12:23:34",
      },
    ],
    // dropdown
    array: ['中国', '美国', '巴西', '日本'],
    index: 0,
    selectBoxIShow: false,
    tabShowPeople: true,  //是否显示人员
    people: [],
    startTime: '2016-10-10',
    endTime: '2016-10-10'

  },
  onLoad() { },
  selectBtn(e) {
    console.log(e)
    if (e.currentTarget.dataset.num == 1) {
      this.setData({
        tabShowPeople: true
      })
    } else {
      this.setData({
        tabShowPeople: false
      })
    }
    this.setData({
      select: e.currentTarget.dataset.num
    })
  },



  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
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
  datePicker() {
    dd.datePicker({
      currentDate: '2016-10-10',
      startDate: '2016-10-9',
      endDate: '2017-10-9',
      success: (res) => {
        this.setData({
          startTime: res.date
        })
      },
    });

  },
  datePicker2() {
    dd.datePicker({
      currentDate: '2016-10-10',
      startDate: '2016-10-9',
      endDate: '2017-10-9',
      success: (res) => {
        this.setData({
          endTime: res.date
        })
      },
    });

  },
});

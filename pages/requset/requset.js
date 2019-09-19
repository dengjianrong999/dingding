var App = getApp();

Page({
  data: {},
  onLoad() {
    console.log(App.globalData.baseUrl)
    // dd.httpRequest({
    //   url: 'http://36.101.208.215:8011/externalProvide/shareDataCheckReslu/insert',
    //   method: 'POST',
    //   data: {
    //     token: 'KDP86NVYTE'
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //     console.log(res)
    //     // dd.alert({ content: 'success' });
    //   },
    //   fail: function(res) {
    //     // dd.alert({ content: 'fail' });
    //   },
    //   complete: function(res) {
    //     //  console.log(res)
    //     // dd.alert({ content: 'complete' });
    //   }
    // });
  },
});

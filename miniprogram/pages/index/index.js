import translate from '../../helpers/api.js'
Page({
  data: {
    tag: 'trans',
    text: '',
    result: ''
  },
  input(e) {
    if (!e.detail.value) {
      return
    }
    this.setData({
      text: e.detail.value
    });
    translate(this.data.text, {
      from: 'zh',
      to: 'en'
    }).then(res => {
      console.log(res);
      this.setData({
        result: res.trans_result[0].dst
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
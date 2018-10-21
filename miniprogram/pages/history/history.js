Page({
  data: {
    history: null
  },
  onShow: function() {
    wx.getStorageSync('history')
      ? this.setData({
          history: wx.getStorageSync('history')
        })
      : ''
  }
})

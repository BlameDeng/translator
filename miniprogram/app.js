App({
  onLaunch: function () {
    wx.getStorageSync('curLang') ? this.globalData = {
      curLang: wx.getStorageSync('curLang')
    } : this.globalData = {
      curLang: {
        type: "en",
        des: "英语"
      }
    }
  }
})
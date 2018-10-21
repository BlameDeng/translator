import langs from '../../assets/langs.js'
const app = getApp()
Page({
  data: {
    langs: langs
  },
  tapItem(e) {
    app.globalData.curLang = e.target.dataset.lang
    wx.setStorageSync('curLang', e.target.dataset.lang)
    wx.navigateBack()
  }
})
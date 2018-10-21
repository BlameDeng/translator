import translate from '../../helpers/api.js'
import formatDate from '../../helpers/formatDate.js'
Page({
  data: {
    text: '',
    result: '',
    lang: {
      type: 'en',
      des: '英语'
    },
    translating: false
  },
  input(e) {
    if (this.data.translating) {
      return
    }
    if (!e.detail.value) {
      return
    }
    this.setData({
      text: e.detail.value,
      translating: true
    })
    translate(this.data.text, {
      from: 'auto',
      to: this.data.lang.type
    }).then(res => {
      this.setData({
        result: res.trans_result[0].dst,
        translating: false
      })
      let history = wx.getStorageSync('history') || []

      if (history.length) {
        history.map(item => {
          let index = history.indexOf(item)
          item.text === this.data.text && item.result === this.data.result
            ? history.splice(index, 1)
            : ''
        })
      }
      history.unshift({
        text: this.data.text,
        result: this.data.result,
        time: formatDate(),
        id: Date.now()
      })
      if (history.length > 10) {
        history.splice(9, 1)
      }
      wx.setStorageSync('history', history)
    })
  }
})

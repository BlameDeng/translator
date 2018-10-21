import md5 from './md5.js'

const appid = '20181021000222642';
const key = 'WUcNqDL592vhH9XLKspb';

function translate(q, {
  from = 'auto',
  to
} = {
    from: 'auto',
    to: 'en'
  }) {
  let salt = Date.now();
  let sign = md5(`${appid}${q}${salt}${key}`);
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data: {
        q,
        from,
        to,
        appid,
        salt,
        sign
      },
      success(res) {
        if (res.data && res.data.trans_result) {
          resolve(res.data);
        } else {
          reject({
            status: 'error',
            msg: '翻译失败'
          });
          wx.showToast({
            title: '翻译失败',
            icon: 'none',
            duration: 2000
          });
        }
      },
      fail() {
        reject({
          status: 'error',
          msg: '翻译失败'
        });
        wx.showToast({
          title: '网络异常',
          icon: 'none',
          duration: 2000
        });
      }
    })
  })

}

module.exports = translate
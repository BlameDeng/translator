function formatDate() {
  let now = new Date();
  let year = now.getFullYear();
  let month = formatNum(now.getMonth() + 1);
  let date = formatNum(now.getDate());
  let hour = formatNum(now.getHours());
  let min = formatNum(now.getMinutes());
  return `${year}-${month}-${date} ${hour}:${min}`;
}

function formatNum(num) {
  num = '' + num;
  if (num.length === 1) {
    num = '0' + num;
  }
  return num;
}

module.exports = formatDate
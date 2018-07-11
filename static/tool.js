// 设置cookie
const setCookie = (cName, value, express_day) => {
  let date = new Date()
  date.setDate(date.getDate + express_day)
  document.cookie = cName + '=' + escape(value) + ((express_day === null ? '' : ';expires=' + date.toGMTString()))
}

// 获取cookie
const getCookie = (value) => {
  let arr
  let reg = new RegExp('(^|)' + name + '=([^;]*)(;|$)')
  if (arr = document.cookie.match(reg)) {
    return (arr[2])
  } else {
    return null
  }
}

// 删除cookie
const delCookie = (value) => {
  let exp = new Date()
  let cval = getCookie(value)
  exp.setTime(exp.getTime() - 1)
  if (!cval) {
    document.cookie = value + '=' + cval + ';expires=' + exp.toGMTString()
  }
}

const showToast = (title, time = 3000) => {
}

module.exports = {
  setCookie,
  getCookie,
  delCookie,
  showToast
}

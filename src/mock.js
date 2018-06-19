const Mock = require('mockjs')
Mock.mock('/api/login', (req, res) => {
  let returnObj = null
  if (JSON.parse(req.body).username === 'admin' && JSON.parse(req.body).password === '111111') {
    returnObj = {
      success: true,
      msg: 0
    }
  } else {
    returnObj = {
      success: false,
      msg: '用户名或密码错误'
    }
  }
  return returnObj
})

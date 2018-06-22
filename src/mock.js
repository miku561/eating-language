const Mock = require('mockjs')
const Random = Mock.Random

// 登录请求接口 默认账户/密码为：admin/111111
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
// 首页返回数据
let index = Mock.mock({
  'indexObj|10': [{
    kindName: Random.name(),
    kindImg: Random.image('100x100'),
    totalNum: Random.natural(0, 100)
  }]
})
// 首页请求接口
Mock.mock('/api/index', index)

// 返回改变后的数值
const getters = {
  count (context) {
    return context.count
  },
  getOdd (context) {
    return context.count % 2 === 0 ? '偶数' : '奇数'
  }
}
module.exports = getters

// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
  add (add) {
    add.commit('add')
  },
  decrease (decrease) {
    decrease.commit('decrease')
  },
  oddAdd ({commit, state}) {
    if (state.count % 2 === 0) {
      commit('add')
    }
  }
}

module.exports = actions

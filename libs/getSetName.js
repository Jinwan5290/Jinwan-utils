module.exports = function (state) {
  if (typeof state !== 'string') throw new Error('参数必须为字符串')
  return `set${state.replace(state[0], state[0].toUpperCase())}`
}

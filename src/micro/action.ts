import { initGlobalState } from 'qiankun';
import router from '@/router/index';
const state = {
  // num: 1,
  // name: 'codeFirst'
}
// 初始化 state
const actions = initGlobalState(state)
actions.onGlobalStateChange((state, prev) => {
  console.log('主应用检测到state变更父级', state)
  console.log('主应用检测到state变更父级', router)
})
// 你还可以定义一个获取state的方法下发到子应用
// actions.getGlobalState = function () {
//   return state
// }
export default actions

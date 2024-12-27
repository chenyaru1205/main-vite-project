import apps from './apps.ts';
import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from 'qiankun';

export const initMicro = () => {
  console.log('注册微应用')
  // 注册微应用
  registerMicroApps(apps, {
    beforeLoad: () => console.log('before load'),
    beforeMount: [() => console.log('before mount')],
    afterMount: () => console.log('*********'),
    beforeUnmount: () => console.log('****beforeUnmount *****'),
    afterUnmount: () => console.log('-------afterUnmount *********---')
  })

  // 全局的未捕获异常处理器
  addGlobalUncaughtErrorHandler(event => {
    console.log("异常捕获", event)
  })
  start()
}

export default initMicro

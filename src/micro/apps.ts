import actions from './action';

const microApps = [
  {
    name: 'vue3-app',
    entry: '//localhost:7001',
    activeRule: '/vue3-app/'
  },
  {
    name: 'vue2-app',
    entry: '//localhost:7002',
    activeRule: '/vue2-app/'
  },
  {
    name: 'react-app',
    entry: '//localhost:7003',
    activeRule: '/react-app/'
  }
]
const apps = microApps.map(app => {
  return {
    ...app,
    container: '#app-micro',
    props: {
      routerBase: app.activeRule, // 下发基础路由
      temmpData: { name: 'cyr', age: 25 },
      parentActions: actions
    },
    loader(loading: any) {
      console.log('loading', loading)
    }
  }
})
export default apps


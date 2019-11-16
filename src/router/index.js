import Error from '../pages/error/index'
import Index from '../pages/index/index'

const routers = {
  navs: [
    {
      title: '主页面',
      path: '/',
      component: Index,
      exact: true,
      disabled: false
    },
    {
      title: '错误',
      path: '/error',
      component: Error,
      disabled: false
    }
  ]
}
export default routers

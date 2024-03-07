import App from '../App'
import Welcome from '../page/welcome'
import Home from '../page/home'

const router = [
  {
    path: '/',
    element: <App />,
    label: 'React',
    children: [
      {
        path: 'welcome',
        element: <Welcome />,
        label: 'Welcome',
      },
      {
        path: 'home',
        label: 'Home',
        element: <Home />,
      },
    ],
  },
]

// 格式化为antd支持的
export const getMenuRouter = (router, key = '', keypath = '') => {
  return router.map((item, index) => {
    const tem = {
      key: `${key}${index}`,
      keypath: `${keypath}${item.path}`,
      icon: '',
      label: item.label,
      theme: '',
      ...item,
    }
    if (item.children) {
      console.log(`${keypath}${item.path}/`)
      tem.children = getMenuRouter(
        item.children,
        `${key}${index}-`,
        `${keypath}${item.path}${keypath ? '/' : ''}`
      )
    }
    return tem
  })
}

export const AntdRouter = getMenuRouter(router)

export default router

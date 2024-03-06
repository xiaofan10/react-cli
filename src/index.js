import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routers from './router'
import store from './store'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'

document.body.innerHTML = '<div id="app"></div>'
const root = createRoot(document.getElementById('app'))

const router = createBrowserRouter(routers)

root.render(
  <ConfigProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ConfigProvider>
)

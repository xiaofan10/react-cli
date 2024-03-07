import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routers from './router'
import store from './store'
import { Provider } from 'react-redux'
import Theme from '@/components/theme'

document.body.innerHTML = '<div id="app"></div>'
const root = createRoot(document.getElementById('app'))

const router = createBrowserRouter(routers)

root.render(
  <Provider store={store}>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </Provider>
)

import { configureStore } from '@reduxjs/toolkit'
import { stuReducer } from './slice/user'
import { globalReducer } from './slice/global'

// 创建store对象，需要配置对象 reducer，
export default configureStore({
  reducer: {
    global: globalReducer,
    student: stuReducer,
  },
})

import { configureStore } from '@reduxjs/toolkit'
import { stuReducer } from './slice/user'

// 创建store对象，需要配置对象 reducer，
export default configureStore({
  reducer: {
    student: stuReducer,
  },
})
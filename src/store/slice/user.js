import { createSlice } from '@reduxjs/toolkit'

// createSlice 创建reducer切片
// 需要一个配置项作为参数,切片对象会自动生成action
const stuSlice = createSlice({
  name: 'stu', // 自动生成action type属性的
  initialState: {
    name: '张三',
  }, // 当前切片state初始值
  reducers: {
    setName(state, action) {
      // 此刻传入的state是个代理对象，可以直接修改
      state.name = action.payload
    },
  },
})

// 使用 stuSlice 切片，调用setName，会返回一个action
export const { setName } = stuSlice.actions

export const { reducer: stuReducer } = stuSlice

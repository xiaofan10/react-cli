
import React from 'react'
import {MemoChildB, ChildB} from './child'

function ParentA () {
  return (
    <div>我是 ParentA</div>
  )
}

function ParentB (props) {
  console.log('update ParentB')
  return (
    <div>
      我是 ParentB，姓名：{props.name}
      <ChildB></ChildB>
    </div>
  )
}



export {
  ParentA,
  ParentB
}
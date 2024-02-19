
import React, { useCallback, useState } from 'react'
import {MemoChildB, ChildB} from './child'

function ParentA () {
  return (
    <div>我是 ParentA</div>
  )
}

function ParentB (props) {
  console.log('update ParentB')
  const [age, setAge] = useState(13)
  const onClick = useCallback((val) => {
    setAge(val.target.value)
  }, [])

  return (
    <div>
      我是 ParentB，姓名：{props.name}
      <br />
      年龄：<input value={age} onChange={onClick} />
      <ChildB onSet={onClick}></ChildB>
    </div>
  )
}




export {
  ParentA,
  ParentB
}
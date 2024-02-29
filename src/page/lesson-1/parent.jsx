import React, { useCallback, useState, useRef, useImperativeHandle } from 'react'
import { ChildB } from './child'
import PropTypes from 'prop-types'

function ParentA() {
  return <div>我是 ParentA</div>
}

function ParentB(props) {
  console.log('update ParentB')
  const [age, setAge] = useState(13)
  const onClick = useCallback(val => {
    setAge(val.target.value)
  }, [])

  return (
    <div>
      我是 ParentB，姓名：{props.name}
      <br />
      年龄：
      <input value={age} onChange={onClick} />
      <ChildB onSet={onClick}></ChildB>
    </div>
  )
}
// 添加 PropTypes 检查
ParentB.propTypes = {
  name: PropTypes.string.isRequired, // 这里假设 name 是一个必须的字符串类型
}

function ParentC(props, ref) {
  return <div ref={ref}>我是ParentC</div>
}
const RefParentC = React.forwardRef(ParentC)

function ParentD(props, ref) {
  const inputRef = useRef()
  useImperativeHandle(
    ref,
    () => ({
      onChange(val) {
        inputRef.current.value = val
      },
      getValue() {
        return inputRef.current.value
      },
    }),
    []
  )
  return <div ref={inputRef}>我是ParentC</div>
}
const RefParentD = React.forwardRef(ParentD)

export { ParentA, ParentB, RefParentC as ParentC, RefParentD as ParentD }

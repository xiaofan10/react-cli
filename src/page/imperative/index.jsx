import { forwardRef, useRef, useImperativeHandle, useEffect } from 'react'

const Child = forwardRef((props, ref) => {
  // 使用 useRef 创建一个内部的 ref
  const innerRef = useRef(null)

  // 使用 useImperativeHandle 暴露子组件的某些方法给父组件
  useImperativeHandle(ref, () => ({
    focus: () => {
      innerRef.current.focus()
    },
  }))
  useEffect(() => {
    console.log(ref, 'Child')
  })
  return <input ref={innerRef} />
})

Child.displayName = 'Child'

function Parent() {
  const root = useRef(null)
  useEffect(() => {
    console.log(root)
    root.current.focus()
  })
  return (
    <div>
      <Child ref={root} />
    </div>
  )
}

export default Parent

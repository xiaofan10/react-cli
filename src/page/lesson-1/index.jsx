// react 相关教程
import React, { useState, useContext, useMemo } from "react";
import { ParentB } from "./parent";
import {ChildA, ChildB} from './child'
import InfoContext from './context'

function Lesson1() {
  const [name, setName] = useState("张三");
  const [age, setAge] = useState(18);
  const [info, setInfo] = useState({
    sex: '男',
    desc: '我是一名程序员'
  })

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onAgeChange = (e) => {
    setAge(e.target.value);
  };
  const onSexChange = (e) => {
    setInfo({
      ...info,
      sex: e.target.value
    })
  }
  const onDescChange = (e) => {
    setInfo({
      ...info,
      desc: e.target.value
    })
  }

  return (
    <div>
      <h1>React API 之 双向数据绑定</h1>
      <ul>
        <li>受控组件：其值由 react 组件的 state 管理的表单元素（input等）</li>
        <li>非受控组件：表单值由DOM本身管理而不是由组件的状态控制</li>
        <li>双向数据绑定：借助useState来实现，同时需要定义事件</li>
      </ul>
      <div>
        姓名：
        <input value={name} onChange={onNameChange} />
      </div>
      <div>
        年龄：
        <input value={age} onChange={onAgeChange} />
      </div>
      <div>
        性别：
        <input value={info.sex} onChange={onSexChange} />
      </div>
      <div>
        描述：
        <input value={info.desc} onChange={onDescChange} />
      </div>
    </div>
  );
}


function Lesson2() {
  const [info, setInfo] = useState({
    name: '李四'
  })
  const ctx = useContext(InfoContext)
  const onNameChange = (e) => {
    setInfo({
      ...info,
      name: e.target.value
    })
  }
  return (
    <div>
      <h1>React 之 Context</h1>
      <ul>
        <li>上下文，用于多个组件深层访问同一数据</li>
      </ul>
      <h2>context 第一种使用方法</h2>
      <InfoContext.Provider value={{...info, onNameChange}}>
        <div>
          <InfoContext.Consumer>
            {
              (ctx) => {
                return (
                  <div>
                    姓名：<input value={ctx.name} onChange={ctx.onNameChange} />
                    {ctx.name}
                    {ctx.age}
                    {ctx.sex}
                  </div>
                )
              }
            }
          </InfoContext.Consumer>
        </div>
      </InfoContext.Provider>
      <h2>context 第二种使用方法 useContext</h2>
      <div>
        {ctx.name}
        {ctx.age}
        {ctx.sex}
      </div>
      <ChildA></ChildA>
    </div>
  )
}

function Lesson3() {
  const [name, setName] = useState('王五')
  const onNameChange = (e) => {
   setName(e.target.value) 
  }
  return (
    <div>
      <h1>React 之 memo</h1>
      <ul>
        <li>高阶函数组件, 用于避免子组件不必要的渲染</li>
        <li>接受另一个组件作为参数并返回一个包装过的新的组件</li>
        <li>包装后的具备缓存功能</li>
        <li>只有组件中的props发生变化，才会触发更新，否则总是返回缓存结果</li>
      </ul>
      <input value={name} onChange={onNameChange}></input>
      <ParentB name={name}></ParentB>
    </div>
  )
}

function Lesson4() {
  const [name, setName] = useState('useCallback')
  const onNameChange = (e) => {
   setName(e.target.value) 
  }
  return (
    <div>
      <h1>React 之 useCallback</h1>
      <ul>
        <li>回调函数</li>
        <li>指定依赖数组，只有数组内依赖改变才会触发更新</li>
      </ul>
      <input value={name} onChange={onNameChange}></input>
      <ParentB  onClick={onNameChange}></ParentB>
    </div>
  )
}



function Lesson5() {
  const [count, setCount] = useState(1)
  const sum = (a, b) => {
    console.log('sum update')
    return a + b
  }
  const result = useMemo(() => sum(1,2), [])

  const onClick = () => {
    setCount(preState => preState + 1)
  }
  return (
    <div>
      <h1>React 之 useMemo</h1>
      <ul>
        <li>缓存函数执行结果</li>
        <li>指定依赖数组，只有数组内依赖改变才会触发更新</li>
      </ul>
      <div>
        计数器：{count}

        <button onClick={onClick}>点击增加</button>
        总和：{result}
      </div>
    </div>
  )
}

function Lesson() {
  return (
    <div>
      <Lesson1></Lesson1>
      <Lesson2></Lesson2>
      {/* <Lesson3></Lesson3> */}
      <Lesson4></Lesson4>
      <Lesson5></Lesson5>

    </div>
  );
}

export default Lesson;

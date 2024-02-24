// react 相关教程
import React, { useState, useContext, useMemo, useRef } from "react";
import { ParentB, ParentC, ParentD } from "./parent";
import { ChildA, ChildB } from "./child";
import InfoContext from "./context";

function Lesson1() {
  const [name, setName] = useState("张三");
  const [age, setAge] = useState(18);
  const [info, setInfo] = useState({
    sex: "男",
    desc: "我是一名程序员",
  });

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onAgeChange = (e) => {
    setAge(e.target.value);
  };
  const onSexChange = (e) => {
    setInfo({
      ...info,
      sex: e.target.value,
    });
  };
  const onDescChange = (e) => {
    setInfo({
      ...info,
      desc: e.target.value,
    });
  };

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

function Lesson3() {
  const [name, setName] = useState("王五");
  const onNameChange = (e) => {
    setName(e.target.value);
  };
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
  );
}

function Lesson4() {
  const [name, setName] = useState("useCallback");
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>React 之 useCallback</h1>
      <ul>
        <li>回调函数</li>
        <li>指定依赖数组，只有数组内依赖改变才会触发更新</li>
        <li>返回值是函数</li>
      </ul>
      <input value={name} onChange={onNameChange}></input>
      <ParentB onClick={onNameChange}></ParentB>
    </div>
  );
}

function Lesson5() {
  const [count, setCount] = useState(1);
  const sum = (a, b) => {
    console.log("sum update");
    return a + b;
  };
  const result = useMemo(() => sum(1, 2), []);

  const onClick = () => {
    setCount((preState) => preState + 1);
  };
  return (
    <div>
      <h1>React 之 useMemo</h1>
      <ul>
        <li>缓存函数执行结果</li>
        <li>指定依赖数组，只有数组内依赖改变才会触发更新</li>
        <li>返回值是值</li>
      </ul>
      <div>
        计数器：{count}
        <button onClick={onClick}>点击增加</button>
        总和：{result}
      </div>
    </div>
  );
}

function Lesson6() {
  const root = useRef();
  const rootC = useRef();
  const rootD = useRef();
  const onGetRef = () => {
    console.log(root);
    console.log(rootC);
    console.log(rootD);
  };
  return (
    <div>
      <h1>React 之 useRef and React.forwardRef and useImperativeHandle</h1>
      <ul>
        <li>useRef 获取 dom 节点</li>
        <li>React.forwardRef 用于父组件获取子组件中的dom</li>
        <li>
          useImperativeHandle hooks
          是用于控制子组件中暴漏的ref的内容，用它包裹能够更好的暴漏子组件内容，视情况而定,
          第三个参数是个数组，以来变化时重新计算
        </li>
      </ul>
      <input ref={root} />
      <ParentC ref={rootC}></ParentC>
      <ParentD ref={rootD}></ParentD>
      <button onClick={onGetRef}>获取ref</button>
    </div>
  );
}

function Lesson7() {
  return (
    <div>
      <ul>
        <li>
          useEffect 生命周期 组件挂载 -》 state改变 -》 DOM 改变 -》 屏幕重绘
          -》 useEffect
        </li>
        <li>
          useLayoutEffect 生命周期 组件挂载 -》 state改变 -》 DOM 改变 -》
          useLayoutEffect -》 屏幕重绘
        </li>
        <li>
          useInsertionEffect 生命周期 组件挂在 -》 state改变 -》useInsertion
          -》DOM改变 -》 屏幕重绘
        </li>
      </ul>
    </div>
  );
}

function Lesson() {
  return (
    <div>
      <Lesson1></Lesson1>
      {/* <Lesson3></Lesson3> */}
      <Lesson4></Lesson4>
      <Lesson5></Lesson5>
      <Lesson6></Lesson6>
    </div>
  );
}

export default Lesson;

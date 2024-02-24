import { useState, memo, useCallback } from "react";

function UChild(props) {
  console.log("UChild update");
  return (
    <div>
      <button onClick={props.ongetUseGName}>获得用户名</button>
    </div>
  );
}

const MemoUChild = memo(UChild);

function UCallback() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("张三");
  console.log("UCallback update");
  const getUserName = useCallback(() => {
    console.log(name);
  }, [name]);
  const add = () => {
    setCount((prev) => prev + 1);
  };
  const onSetName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div>
        姓名：
        <input value={name} onChange={onSetName} />
        计数器：{count} <button onClick={add}>加一</button>
      </div>
      <MemoUChild ongetUseGName={getUserName}></MemoUChild>
    </>
  );
}

function Lesson() {
  return (
    <>
      <UCallback />
    </>
  );
}

export default Lesson;

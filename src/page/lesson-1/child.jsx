import React from 'react';
function ChildA () {
  return (
    <div>我是ChildA</div>
  )
}

function ChildB (props) {
  console.log('update ChildB')
  return (
    <div>
      我是ChildB
    </div>
  )
}

const MemoChildB = React.memo(ChildB); // 缓存ChildB的渲染结果

export {
  ChildA,
  MemoChildB as ChildB // 仅当ChildB的props发生变化时才重新渲染
}
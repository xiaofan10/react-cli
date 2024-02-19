import React from "react";

const infoContext = React.createContext({
  name: '张三',
  age: 13,
  sex: '男'
})

export default infoContext
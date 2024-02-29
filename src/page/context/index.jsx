import { Component, createContext, useContext, memo, useState, useMemo } from 'react'
import styles from './index.less'

const ContextState = createContext({
  userInfo: {
    name: '未初始化',
    age: 0,
    sex: '未初始化',
  },
})

class GrandChild extends Component {
  render() {
    console.log('GrandChild update')
    return (
      <div>
        <ContextState.Consumer>
          {({ userInfo }) => {
            return (
              <div>
                <p>姓名：{userInfo.name} GrandChild</p>
                <p>性别：{userInfo.sex}</p>
                <p>年龄：{userInfo.age - 40}</p>
              </div>
            )
          }}
        </ContextState.Consumer>
      </div>
    )
  }
}

const MemoGrandChild = memo(GrandChild)

class Child extends Component {
  render() {
    console.log('child update')
    return (
      <div>
        <ContextState.Consumer>
          {({ userInfo, onChangeAge }) => {
            return (
              <div>
                <p>姓名：{userInfo.name} Child</p>
                <p>性别：{userInfo.sex}</p>
                <p>年龄：{userInfo.age - 20}</p>
                <button onClick={() => onChangeAge(userInfo.age)}>改变年龄</button>
              </div>
            )
          }}
        </ContextState.Consumer>
        <MemoGrandChild></MemoGrandChild>
      </div>
    )
  }
}

const MemoChild = memo(Child)

class Parent extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: {
        name: '张三',
        age: 14,
        sex: 'man',
      },
    }
    this.onChangeAge = this.onChangeAge.bind(this)
  }

  onChangeAge(val) {
    const { userInfo } = this.state
    this.setState({
      userInfo: {
        ...userInfo,
        age: val + 1,
      },
    })
  }

  render() {
    const { userInfo } = this.state
    console.log('parent update')
    return (
      <div>
        <h1>React 之 Context</h1>
        <div className={styles.content}>
          <div>
            <p>姓名：{userInfo.name}</p>
            <p>性别：{userInfo.sex}</p>
            <p>年龄：{userInfo.age}</p>
          </div>
          <ContextState.Provider value={{ userInfo, onChangeAge: this.onChangeAge }}>
            <MemoChild />
          </ContextState.Provider>
        </div>
      </div>
    )
  }
}

function UGrandChild() {
  const { userInfo } = useContext(ContextState)
  return useMemo(() => {
    console.log('UGrandChild update')
    return (
      <div>
        <p>姓名：{userInfo.name} GrandChild</p>
        <p>性别：{userInfo.sex}</p>
        <p>年龄：{userInfo.age - 40}</p>
      </div>
    )
  }, [userInfo])
}

function UChild() {
  console.log('UChild update')
  const { userInfo, onChangeAge } = useContext(ContextState)
  return (
    <div>
      <div>
        <p>姓名：{userInfo.name} Child</p>
        <p>性别：{userInfo.sex}</p>
        <p>年龄：{userInfo.age - 20}</p>
        <button onClick={() => onChangeAge(userInfo.age)}>改变年龄</button>
      </div>
      <UGrandChild></UGrandChild>
    </div>
  )
}
const MemoUChild = memo(UChild)

function UParent() {
  const [userInfo, setUserInfo] = useState({
    name: '张三',
    age: 14,
    sex: 'man',
  })
  const onChangeAge = val => {
    setUserInfo({
      ...userInfo,
      age: val + 1,
    })
  }
  console.log('UParent update')

  return (
    <div>
      <h1>React 之 useContext</h1>
      <div className={styles.content}>
        <div>
          <p>姓名：{userInfo.name}</p>
          <p>性别：{userInfo.sex}</p>
          <p>年龄：{userInfo.age}</p>
          <button onClick={() => onChangeAge(userInfo.age)}>改变年龄</button>
        </div>
        <ContextState.Provider value={{ userInfo, onChangeAge }}>
          <MemoUChild />
        </ContextState.Provider>
      </div>
    </div>
  )
}

function Lesson() {
  return (
    <div>
      <Parent />
      <UParent />
    </div>
  )
}

export default Lesson

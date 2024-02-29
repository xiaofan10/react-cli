import { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'
import styles from './app.less'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '李四是啦啦啦啦',
    }
  }

  render() {
    const { name } = this.state
    return (
      <div className={styles.wrap}>
        <div className={styles.aside}>
          {name}
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/Lesson">Welcome</Link>
          </div>
          <div>
            <Link to="/Lesson/Context">Context</Link>
          </div>
          <div>
            <Link to="/Lesson/Ref">Ref</Link>
          </div>
          <div>
            <Link to="/Lesson/Callback">Callback</Link>
          </div>
          <div>
            <Link to="/Lesson/Reducer">Reducer</Link>
          </div>
          <div>
            <Link to="/Lesson/Imperative">Imperative</Link>
          </div>

          <div>
            <Link to="/lesson1">Lesson1</Link>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.box}>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
}

export default App

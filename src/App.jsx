import { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./app.less";

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      name: '李四是啦啦啦啦'
    }
  }

  render() {
    const {name} = this.state;
    return (
      <div className={styles.wrap}>
        <div className={styles.aside}>
          {name}
          <Link to="/">Home</Link>
          <Link to="/welcome">About</Link>
          <Link to="/welcome/lesson">Lesson</Link>
        </div>
        <div className={styles.main}>
          <Outlet />
        </div>
      </div>
    );
  }
}

export default App;
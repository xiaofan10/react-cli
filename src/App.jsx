import { Component } from "react";
import styles from "./app.less";
import Welcome from "./page/welcome/index";

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      name: '张三'
    }
  }
  render() {
    const {name} = this.state;
    return (
      <>
        <h1 className={ styles.title }>
          Hello World
          <span className={ styles.desc }>Hi</span>
        </h1>
        <div className={ styles.content }>
          大家好,{ name }
        </div>
        <Welcome />
      </>
    )
  }
}

export default App;
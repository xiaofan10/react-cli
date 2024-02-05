import { Component } from "react";
import "./app.css";

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
        <h1 className="title">Hello World</h1>
        <div>
          大家好,{ name }
        </div>
      </>
    )
  }
}

export default App;
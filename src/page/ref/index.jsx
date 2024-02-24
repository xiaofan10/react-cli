import { useEffect, useRef, Component } from "react";

class R extends Component {
  constructor() {
    super();
    this.root = null;
  }
  componentDidMount() {
    console.log("class ref", this.root);
  }
  render() {
    return (
      <div>
        <h1>React 之 class ref</h1>
        <div ref={(c) => (this.root = c)}>I'm Ref</div>
      </div>
    );
  }
}

function UR() {
  const root = useRef();

  useEffect(() => {
    console.log(root, "dom render");
  }, []);

  return (
    <div>
      <h1>React 之 useRef</h1>
      <div ref={root}>I'm Ref</div>
    </div>
  );
}
function Lesson() {
  return (
    <>
      <R></R>
      <UR></UR>
    </>
  );
}

export default Lesson;

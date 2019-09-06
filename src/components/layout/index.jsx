import React from 'react';
import indexCss from './index.less';
console.log(indexCss)
class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class={indexCss.title}>
        sssdfdsssssssfsdf
      </div>
    )
  }
}

export default Layout;
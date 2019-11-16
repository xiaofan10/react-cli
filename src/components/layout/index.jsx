import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

class Layout extends React.Component {
  renderLinks () {
    const {
      menu
    } = this.props

    return menu.map((item, index) => {
      return (
        <li key={index} className="FF-menu-list-item">
          <Link
            to={item.path}
          >
            {item.title}
          </Link>
        </li>
      )
    })
  }

  render () {
    return (
      <div className="FF-layout-wrap">
        <div className="FF-layout-menu">
          <ul className="FF-menu-list-wrap">
            {this.renderLinks()}
          </ul>
        </div>
        <div className="FF-layout-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout

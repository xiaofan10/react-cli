import { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'
import styles from './app.less'
import { ConfigProvider, Layout, Menu } from 'antd'
import { AntdRouter } from './router'

const { Header, Footer, Sider, Content } = Layout
const { SubMenu } = Menu

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'React',
    }
  }

  onMenuClick(...args) {
    console.log(args)
  }

  componentDidMount() {
    console.log(AntdRouter)
  }

  renderMenuItems(items) {
    return items.map(item => {
      console.log(item)
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.label}>
            {this.renderMenuItems(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          <Link to={item.keypath}>{item.label}</Link>
        </Menu.Item>
      )
    })
  }

  render() {
    const { name } = this.state
    const { onMenuClick } = this
    return (
      <ConfigProvider>
        <div className={styles.wrap}>
          <Layout style={{ height: '100vh', color: '#fff' }}>
            <Sider width="25%">
              <div>{name}</div>
              {/* <Link to="/">Home</Link>
              <Link to="/welcome">About</Link>
              <Link to="/welcome/lesson">Lesson</Link> */}
              <Menu theme="dark" mode="inline" onClick={onMenuClick}>
                {this.renderMenuItems(AntdRouter)}
              </Menu>
            </Sider>
            <Layout>
              <Header>Header</Header>
              <Content>
                <Outlet />
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        </div>
      </ConfigProvider>
    )
  }
}

export default App

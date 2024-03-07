import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'
import styles from './app.module.less'
import { Layout, Menu } from 'antd'
import { AntdRouter } from './router'

const { Header, Footer, Sider, Content } = Layout
const { SubMenu } = Menu

function App(props) {
  const [name] = useState('React')

  const onMenuClick = (...args) => {
    console.log(args)
  }

  const renderMenuItems = items => {
    return items.map(item => {
      console.log(item)
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.label}>
            {renderMenuItems(item.children)}
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

  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div className={styles.wrap}>
      <Layout style={{ height: '100vh', color: '#fff' }}>
        <Sider width="25%">
          <div>{name}</div>
          <Menu theme="dark" mode="inline" onClick={onMenuClick}>
            {renderMenuItems(AntdRouter)}
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
  )
}

export default App

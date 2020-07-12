import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { UsergroupAddOutlined,  UserOutlined } from '@ant-design/icons'
import { Nickname } from './styles'
const { Content, Sider } = Layout
const { SubMenu } = Menu

export default function CustomLayout({children, currentUser}) {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Nickname>Welcome, {currentUser.nickname}</Nickname>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<UsergroupAddOutlined />}>
            Create new group
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Group chats">
            <Menu.Item key="2">Programming</Menu.Item>
            <Menu.Item key="3">Food</Menu.Item>
            <Menu.Item key="4">COVID-19</Menu.Item>
            <Menu.Item key="5">Finance</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div className="App-grid">
              { children }
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
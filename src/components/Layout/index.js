import React from 'react'
import { Layout } from 'antd'
import { Nickname } from './styles'
const { Content } = Layout

export default function CustomLayout({children, currentUser}) {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <Nickname>Welcome, {currentUser.nickname}</Nickname> */}
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
import React from 'react'
import logo from '../../appnonymous_logo.png'
import { Layout } from 'antd'
import { StyledHeader, Nickname, Logo } from './styles'
const { Content } = Layout

export default function CustomLayout({children, currentUser}) {

  return (
    <Layout style={{ minHeight: '100vh' }}>
       <StyledHeader>
         <Logo src={logo} alt="Appnonymous - Chat app" />
        <Nickname>Welcome, {currentUser.nickname}</Nickname>
      </StyledHeader>
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
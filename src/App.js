import React, { useState, useEffect } from 'react'
import { MessageOutlined, SolutionOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import './App.css'
import useUsers from './hooks/useUsers';
import UserContext from './context/userContext'
import CustomLayout from './components/Layout'
import MainTabs from './components/MainTabs'
import ChatShow from './components/Chat'
import ListOfUsers from './components/ListOfUsers'
import ListOfChats from './components/ListOfChats'
import { createUser } from './services/users'

function App() {
  const [user, setUser] = useState('')
  const users = useUsers()

  useEffect(() => {
    let userSessionId

    if (window.sessionStorage.user === undefined) {
      const randomNumber = Math.floor(Math.random() * 10001)
      userSessionId = window.sessionStorage['user'] = `user-${randomNumber}`

      // Create user in firebase
      createUser(userSessionId)

    } else {
      userSessionId = window.sessionStorage['user']
    }

    setUser({id: userSessionId})
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={users}>
        <CustomLayout user={user}>
          <div className="chat-list">
            <MainTabs>
              <ListOfChats tabname={<span><MessageOutlined />Chats</span>} />
              <ListOfUsers tabname={<span><SolutionOutlined />Users</span>} />
            </MainTabs>
          </div>
          <ChatShow />
        </CustomLayout>
      </UserContext.Provider>
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import './App.css'
import { MessageOutlined, SolutionOutlined } from '@ant-design/icons'
import { createUser } from './services/users'
import useUsers from './hooks/useUsers';
import UserContext from './context/userContext'
import CustomLayout from './components/Layout'
import MainTabs from './components/MainTabs'
import ChatShow from './components/Chat'
import ListOfUsers from './components/ListOfUsers'
import ListOfChats from './components/ListOfChats'

function App() {
  const [currentUser, setUser] = useState('')
  const [chatVisible, setChatVisible] = useState(false)
  const [currentChatParticipant, setCurrentChatParticipant] = useState('')
  const users = useUsers()

  useEffect(() => {
    let userSessionId

    if (window.sessionStorage.user === undefined) {
      const randomNumber = Math.floor(Math.random() * 10001)
      userSessionId = window.sessionStorage['user'] = `user-${randomNumber}`
      createUser(userSessionId) // Create user in firebase
    } else {
      userSessionId = window.sessionStorage['user']
    }

    setUser({id: userSessionId})
  }, [])

  const openChat = (participantUser) => {
    setCurrentChatParticipant(participantUser)
    setChatVisible(true)
  }

  return (
    <div className="App">
      <UserContext.Provider value={users}>
        <CustomLayout user={currentUser}>
          <div className="tabs-list">
            <MainTabs>
              <ListOfChats
                tabname={<span><MessageOutlined />Chats</span>}
              />
              <ListOfUsers
                tabname={<span><SolutionOutlined />Users</span>}
                openChat={openChat}
                userSessionId={currentUser.id}
              />
            </MainTabs>
          </div>
          <ChatShow
            visible={chatVisible}
            participantUser={currentChatParticipant}
          />
        </CustomLayout>
      </UserContext.Provider>
    </div>
  )
}

export default App

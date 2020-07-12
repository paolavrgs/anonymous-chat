import React, { useState, useEffect } from 'react'
import { Route } from 'wouter'
import './App.css'
import { createUser } from './services/users'
import useUsers from './hooks/useUsers'
import useChats from './hooks/useChats'
import UserContext from './context/userContext'
import CustomLayout from './components/Layout'
import Home from './pages/Home'
import ChatsContext from './context/chatsContext'

function App() {
  const [currentUser, setUser] = useState({})
  const users = useUsers()
  const chats = useChats(currentUser)

  useEffect(() => {
    let userSessionNickname
    let userSessionId

    if (window.sessionStorage.userNickname === undefined && window.sessionStorage.userId === undefined) {
      const randomNumber = Math.floor(Math.random() * 10001)
      userSessionNickname = window.sessionStorage['userNickname'] = `user-${randomNumber}`

      createUser(userSessionNickname).then(ch => {
        userSessionId = window.sessionStorage['userId'] = ch.id
      })
    } else {
      userSessionNickname = window.sessionStorage['userNickname']
      userSessionId = window.sessionStorage['userId']
    }

    setUser({id: userSessionId, nickname: userSessionNickname})
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={users}>
        <CustomLayout currentUser={currentUser}>
          <ChatsContext.Provider value={chats}>
            <Route path="/">
              <Home currentUser={currentUser} />
            </Route>
          </ChatsContext.Provider>
        </CustomLayout>
      </UserContext.Provider>
    </div>
  )
}

export default App

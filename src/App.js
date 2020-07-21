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

  const _randomUuid = () => Math.floor(Math.random() * 10001)

  useEffect(() => {
    const session = window.sessionStorage
    const { userNickname, userId } = session

    let userSessionNickname = null
    let userSessionId = null

    if (!userNickname && !userId) {
      userSessionNickname = session['userNickname'] = `user-${_randomUuid()}`

      createUser(userSessionNickname).then(user => {
        userSessionId = session['userId'] = user.id
        setUser({id: userSessionId, nickname: userSessionNickname})
      })
      return
    }

    userSessionNickname = session['userNickname']
    userSessionId = session['userId']

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

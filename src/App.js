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
  const [currentUser, setUser] = useState('')
  const users = useUsers()
  const chats = useChats(currentUser)

  useEffect(() => {
    let userSessionNickname

    if (window.sessionStorage.user === undefined) {
      const randomNumber = Math.floor(Math.random() * 10001)
      userSessionNickname = window.sessionStorage['user'] = `user-${randomNumber}`
      createUser(userSessionNickname) // Create user in firebase
    } else {
      userSessionNickname = window.sessionStorage['user']
    }

    setUser({nickname: userSessionNickname})
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={users}>
        <CustomLayout user={currentUser}>
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

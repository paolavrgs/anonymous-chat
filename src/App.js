import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import 'antd/dist/antd.css'
import './App.css'
import CustomLayout from './components/Layout'
import ChatsList from './components/ChatsList'
import ChatShow from './components/Chat'

function App() {
  const [user, setUser] = useState('')

  useEffect(() => {
    let userSessionId

    if (window.sessionStorage.user === undefined) {
      const randomNumber = Math.floor(Math.random() * 10001)
      userSessionId = window.sessionStorage['user'] = `user-${randomNumber}`

      // Create user in firebase
      const db = firebase.firestore()
      db.collection("users").add({
        user: {
          id: userSessionId
        }
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      })

    } else {
      userSessionId = window.sessionStorage['user']
    }

    setUser({id: userSessionId})
  }, [])

  return (
    <div className="App">
      <CustomLayout user={user}>
        <ChatsList />
        <ChatShow />
      </CustomLayout>
    </div>
  )
}

export default App

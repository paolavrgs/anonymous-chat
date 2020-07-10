import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import 'antd/dist/antd.css'
import './App.css'
import CustomLayout from './components/Layout'
import { Tabs } from 'antd'
import ListOfUsers from './components/ListOfUsers'
import { SolutionOutlined } from '@ant-design/icons'

const { TabPane } = Tabs

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
        <div className="App-grid">
          <div className="list-chat">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Chats" key="1">
                My chats
              </TabPane>
              <TabPane
                key="2"
                tab={
                  <span>
                    <SolutionOutlined />
                    Users
                  </span>
                }
              >
                <ListOfUsers />
              </TabPane>
            </Tabs>
          </div>
          <div className="current-chat">Current Chat</div>
        </div>
      </CustomLayout>
    </div>
  )
}

export default App

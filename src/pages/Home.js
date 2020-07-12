import React, {useState,useContext} from 'react'
import { MessageOutlined, SolutionOutlined } from '@ant-design/icons'
import MainTabs from '../components/MainTabs'
import ChatShow from '../components/Chat'
import ListOfUsers from '../components/ListOfUsers'
import ListOfChats from '../components/ListOfChats'
import ChatsContext from '../context/chatsContext'
import { createChat } from '../services/chat'

export default function Home({currentUser}) {
  const [chatVisible, setChatVisible] = useState(false)
  const [currentChatParticipant, setCurrentChatParticipant] = useState('')
  const chats = useContext(ChatsContext)
  
  const openChat = (participantUser) => {
    setCurrentChatParticipant(participantUser)

    const chatUsers = [participantUser, currentUser]

    chats.forEach(chat => {

      if (chat.users.some(user => user.nickname === participantUser.nickname)) {
        setChatVisible(true)
      } else {
        createChat(chatUsers) // Create chat in firebase
        setChatVisible(true)
      }
    })
  }

  return (
    <>
      <div className="tabs-list">
        <MainTabs>
          <ListOfChats
            tabname={<span><MessageOutlined />Chats</span>}
            openChat={openChat}
            currentUser={currentUser.nickname}
          />
          <ListOfUsers
            tabname={<span><SolutionOutlined />Users</span>}
            openChat={openChat}
            currentUser={currentUser.nickname}
          />
        </MainTabs>
      </div>
      <ChatShow
        visible={chatVisible}
        participantUser={currentChatParticipant}
      />
    </>
  )
}
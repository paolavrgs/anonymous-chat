import React, {useState,useContext} from 'react'
import { MessageOutlined, SolutionOutlined } from '@ant-design/icons'
import MainTabs from '../components/MainTabs'
import ChatShow from '../components/Chat'
import ListOfUsers from '../components/ListOfUsers'
import ListOfChats from '../components/ListOfChats'
import ChatsContext from '../context/chatsContext'
import { createChat } from '../services/chats'

export default function Home({currentUser}) {
  const [chatVisible, setChatVisible] = useState(false)
  const [currentChatParticipant, setCurrentChatParticipant] = useState('')
  const [currentChatId, setCurrentChatId] = useState('')

  const chats = useContext(ChatsContext)
  
  const openChat = (participantUser) => {
    setCurrentChatParticipant(participantUser)
    const chatUsers = [participantUser, currentUser]
    let chat        = null

    chat = chats.find(chat => {
      return chat.users.some(u => u.nickname === participantUser.nickname)
    })

    if (!chat) {
      createChat(chatUsers).then(ch => {
        setCurrentChatId(ch.id)
      })
    } else {
      setCurrentChatId(chat.id)
    }

    setChatVisible(true)
  }

  return (
    <>
      <div className="tabs-list">
        <MainTabs>
          <ListOfChats
            tabname={<span><MessageOutlined />Chats</span>}
            openChat={openChat}
            currentUser={currentUser}
          />
          <ListOfUsers
            tabname={<span><SolutionOutlined />Users</span>}
            openChat={openChat}
            currentUser={currentUser}
          />
        </MainTabs>
      </div>
      <ChatShow
        visible={chatVisible}
        currentChatId={currentChatId}
        ownerUser={currentUser}
        participantUser={currentChatParticipant}
      />
    </>
  )
}
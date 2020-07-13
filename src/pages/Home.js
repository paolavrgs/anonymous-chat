import React, {useState,useContext} from 'react'
import { MessageOutlined, SolutionOutlined, CommentOutlined } from '@ant-design/icons'
import MainTabs from '../components/MainTabs'
import ChatShow from '../components/Chat'
import ListOfUsers from '../components/ListOfUsers'
import ListOfChats from '../components/ListOfChats'
import ChatsContext from '../context/chatsContext'
import { createChat } from '../services/chats'
import MainModal from '../components/Modal'
import ListOfGroups from '../components/ListOfGroups'
import { compareArray } from '../utils/array_comparator'

export default function Home({currentUser}) {
  const [chatVisible, setChatVisible] = useState(false)
  const [currentChatParticipants, setCurrentChatParticipants] = useState([])
  const [currentChatId, setCurrentChatId] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [groupChatUsers, setGroupChatUsers] = useState([])

  const chats = useContext(ChatsContext)

  const showModal = () => {
    setModalVisible(true)
  }

  const hideModal = () => {
    setModalVisible(false)
  }
  
  const openChat = (e, participantsUsers, group = false) => {
    setCurrentChatParticipants(participantsUsers)
    let chatUsers = [...participantsUsers]
    let chat      = null
    
    if (!chatUsers.some(user => user.id === currentUser.id)) {
      chatUsers = [...participantsUsers, currentUser]
    }
    console.log({chatUsers})

    const filteredChat = chats.filter(ch => ch.group === group)

    chat = filteredChat.find(item => {
      return compareArray(item.users.map(u => u.id), chatUsers.map(i => i.id))
    })

    if (!chat) {
      createChat(chatUsers, group).then(ch => {
        setCurrentChatId(ch.id)
      })
    } else {
      setCurrentChatId(chat.id)
    }

    setChatVisible(true)
    hideModal()
    setGroupChatUsers([])
  }

  const addOrRemoveUserToGroup = (e, user) => {
    const userExist = groupChatUsers.some(u => u == user[0])

    console.log('target', e.target)
    if (userExist) {
      const removeUserIndex = groupChatUsers.findIndex(u => u === user)
      groupChatUsers.splice(removeUserIndex, 1)
      e.target.classList.remove('active')
      setGroupChatUsers(groupChatUsers)

    } else {
      e.target.classList.add('active')
      setGroupChatUsers([...groupChatUsers, ...user])
    }
  }

  return (
    <>
      <div className="tabs-list">
        <MainTabs>
          <ListOfChats
            tabname={<span><MessageOutlined />Chats</span>}
            actionFunction={openChat}
            currentUser={currentUser}
            />
          <ListOfGroups
            tabname={<span><CommentOutlined />Groups</span>}
            actionFunction={openChat}
            currentUser={currentUser}
            showModal={showModal}
          />
          <ListOfUsers
            tabname={<span><SolutionOutlined />Users</span>}
            actionFunction={openChat}
            currentUser={currentUser}
          />
        </MainTabs>
      </div>
      <ChatShow
        visible={chatVisible}
        currentChatId={currentChatId}
        ownerUser={currentUser}
        participantsUser={currentChatParticipants}
      />

      <MainModal
        title="Create new group"
        modalVisible={modalVisible}
        hideModal={hideModal}
      >
        <ListOfUsers
          actionFunction={addOrRemoveUserToGroup}
          currentUser={currentUser}
        />
        <button onClick={(e) => openChat(e, groupChatUsers, true)}>Create group chat</button>
      </MainModal>
    </>
  )
}
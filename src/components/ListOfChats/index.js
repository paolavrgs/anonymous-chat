import React, {useContext} from 'react'
import ChatsContext from '../../context/chatsContext'

export default function ListOfChats({currentUser, openChat}) {
  const chats = useContext(ChatsContext)
  console.log(chats)

  return (
    <ul>
      {chats !== undefined && chats.map((chat) => {
        return (
          <li key={chat.id}>
            {chat.users.map(user => {
              return (
                user.nickname !== currentUser &&
                  <span onClick={() => openChat(user)} key={user.nickname}>{user.nickname}</span>
              )
            })}
          </li>
        )
      })}
    </ul>
  )
}
import React, {useContext} from 'react'
import { ListItem, ListUl } from './styles'
import ChatsContext from '../../context/chatsContext'

export default function ListOfChats({currentUser, openChat}) {
  const chats = useContext(ChatsContext)

  return (
    <ListUl>
      {chats !== undefined && chats.map((chat) => {
        return (
          <ListItem key={chat.id}>
            {chat.users.map(user => {
              return (
                user.id !== currentUser.id &&
                  <span onClick={() => openChat(user)} key={user.id}>{user.nickname}</span>
              )
            })}
          </ListItem>
        )
      })}
    </ListUl>
  )
}
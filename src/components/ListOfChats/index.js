import React, {useContext} from 'react'
import { ListItem, ListUl } from './styles'
import ChatsContext from '../../context/chatsContext'

export default function ListOfChats({currentUser, actionFunction}) {
  const chats = useContext(ChatsContext)

  return (
    <ListUl>
      {chats !== undefined && chats.filter(chat => chat.group === false).map((chat) => {
        return (
          <ListItem key={chat.id}>
            {chat.users.map(user => {
              return (
                user.id !== currentUser.id &&
                  <div onClick={(e) => actionFunction(e, chat.users)} key={user.id}>{user.nickname}</div>
              )
            })}
          </ListItem>
        )
      })}
    </ListUl>
  )
}
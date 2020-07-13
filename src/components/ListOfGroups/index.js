import React, {useContext} from 'react'
import { ListItem, ListUl, StyledButton } from './styles'
import ChatsContext from '../../context/chatsContext'

export default function ListOfGroups({currentUser, actionFunction, showModal}) {
  const chats = useContext(ChatsContext)

  return (
    <>
      <StyledButton onClick={showModal} type="primary">Create new group chat</StyledButton>
      <ListUl>
        {chats !== undefined && chats.filter(chat => chat.group === true).map((chat) => {
          return (
            <ListItem key={chat.id}>
              {chat.users.map(user => {
                return (
                  user.id !== currentUser.id &&
                    <span onClick={(e) => actionFunction(e, chat.users, true)} key={user.id}>{user.nickname},</span>
                )
              })}
            </ListItem>
          )
        })}
      </ListUl>
    </>
  )
}
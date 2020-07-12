import React, { useContext } from 'react'
import { ListItem, ListUl } from './styles'
import UserContext from '../../context/userContext'

export default function ListOfUsers({openChat, currentUser}) {
  const users = useContext(UserContext)

  return (
    <ListUl>
      {users !== undefined && users.map((user) => {
        return (
          user.id !== currentUser.id &&
            <ListItem key={user.id} onClick={() => openChat(user)}>{user.nickname}</ListItem>
        )
      })}
    </ListUl>
  )
}
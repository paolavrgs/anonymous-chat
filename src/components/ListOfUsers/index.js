import React, { useContext } from 'react'
import { ListItem, ListUl } from './styles'
import UserContext from '../../context/userContext'

export default function ListOfUsers({actionFunction, currentUser}) {
  const users = useContext(UserContext)

  return (
    <ListUl>
      {users !== undefined && users.map((user) => {
        return (
          user.id !== currentUser.id &&
            <ListItem key={user.id} onClick={(e) => actionFunction(e, [user])}>
              {user.nickname}
            </ListItem>
        )
      })}
    </ListUl>
  )
}
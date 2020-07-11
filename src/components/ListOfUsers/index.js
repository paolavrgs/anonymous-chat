import React, { useContext } from 'react'
import UserContext from '../../context/userContext'

export default function ListOfUsers({openChat, userSessionId}) {
  const users = useContext(UserContext)

  return (
    <ul>
      {users !== undefined && users.map(({user}) => {
        return (
          user.id !== userSessionId &&
            <li key={user.id} onClick={() => openChat(user)}>{user.id}</li>
        )
      })}
    </ul>
  )
}
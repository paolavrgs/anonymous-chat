import React, { useContext } from 'react'
import UserContext from '../../context/userContext'

export default function ListOfUsers({openChat, currentUser}) {
  const users = useContext(UserContext)

  return (
    <ul>
      {users !== undefined && users.map((user) => {
        return (
          user.nickname !== currentUser &&
            <li key={user.id} onClick={() => openChat(user)}>{user.nickname}</li>
        )
      })}
    </ul>
  )
}
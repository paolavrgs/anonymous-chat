import React, { useContext } from 'react'
import UserContext from '../../context/userContext'

export default function ListOfUsers() {
  const users = useContext(UserContext)

  const openChat = (id) => {
    console.log(`abrir chat ${id}`)
  }

  return (
    <ul>
      {users !== undefined && users.map(({user}) => {
        return (
          <li key={user.id} onClick={() => openChat(user.id)}>{user.id}</li>
        )
      })}
    </ul>
  )
}
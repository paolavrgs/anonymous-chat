import React from 'react'
import { ChatMessage } from './styles'
import useMessages from '../../hooks/useMessages'

export default function Messages({chatId, currentUser}) {
  const messages = useMessages(chatId)

  return (
    <>
    {messages.length !== 0 ? (
      messages.map(({id, owner, body}) => {
        return (
          <ChatMessage key={id} className={owner.id === currentUser.id ? 'own' : ''}>{body}</ChatMessage>
        )
      })
    ) : (
      <p>No messages, start chating</p>
    )}
    </>
  )
}
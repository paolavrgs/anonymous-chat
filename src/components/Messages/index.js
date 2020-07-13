import React from 'react'
import { FormOutlined } from '@ant-design/icons'
import { ChatMessage, NoData } from './styles'
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
      <NoData>
        <>
          <FormOutlined />
          <h3>No messages yet</h3>
          <h2>Start chating!</h2>
        </>
      </NoData>
    )}
    </>
  )
}
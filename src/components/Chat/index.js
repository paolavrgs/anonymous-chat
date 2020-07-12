import React, { useState } from 'react'
import { createMessage } from '../../services/messages'
import { Form, Input, Button } from 'antd'
import { ChatHeader, ChatWrapper, ChatMessage, ChatForm } from './styles'

export default function ChatShow({ visible, currentChatId, ownerUser, participantUser }) {
  const [messageBody, setMessageBody] = useState('')

  const onChange = (e) => {
    setMessageBody(e.target.value)
  }

  const onSubmit = () => {
    createMessage(currentChatId, ownerUser, participantUser, messageBody)
    setMessageBody('')
  }

  return (
    <div className={`chat-show show-${visible}`}>
      <ChatHeader>
        <h4>{participantUser.nickname}</h4>
      </ChatHeader>

      <ChatWrapper>
        {/* <ChatMessage>Hi paola</ChatMessage> */}
        {/* <ChatMessage className="own">Hi user</ChatMessage> */}
      </ChatWrapper>

      <ChatForm onSubmit={onSubmit}>
        <Form.Item>
          <Input id="messageInput" onChange={onChange} value={messageBody} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" onClick={onSubmit} type="primary">Send</Button>
        </Form.Item>
      </ChatForm>
    </div>
  )
}
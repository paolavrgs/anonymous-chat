import React, { useState } from 'react'
import { createMessage } from '../../services/messages'
import { Form, Input, Button } from 'antd'
import { ChatHeader, ChatWrapper, ChatForm } from './styles'
import Messages from '../Messages'

export default function ChatShow({ visible, currentChatId, ownerUser, participantsUser }) {
  const [messageBody, setMessageBody] = useState('')

  const onChange = (e) => {
    setMessageBody(e.target.value)
  }

  const onSubmit = () => {
    createMessage(currentChatId, ownerUser, participantsUser, messageBody)
    setMessageBody('')
  }

  return (
    <div className={`chat-show show-${visible}`}>
      <ChatHeader>
        {/* <h4>{participantUser.nickname}</h4> */}
      </ChatHeader>

      <ChatWrapper>
        {visible &&
          <Messages chatId={currentChatId} currentUser={ownerUser} />
        }
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
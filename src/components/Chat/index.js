import React, { useState } from 'react'
import { createMessage } from '../../services/messages'
import { Form, Input, Button } from 'antd'
import { ChatContainer, ChatHeader, ChatWrapper, ChatForm } from './styles'
import Messages from '../Messages'

export default function ChatShow({ currentChatId, ownerUser, participantsUser }) {
  const [messageBody, setMessageBody] = useState('')

  const onChange = (e) => {
    setMessageBody(e.target.value)
  }

  const onSubmit = () => {
    createMessage(currentChatId, ownerUser, participantsUser, messageBody)
    setMessageBody('')
  }

  return (
    <ChatContainer>
      <ChatHeader>
        {participantsUser.length === 2 ? (
            participantsUser.map(participant => {
              return participant.id !== ownerUser.id &&
                <h4 key={participant.id}>{participant.nickname}</h4>
            })
          ) : (
            participantsUser.map(participant => {
              return participant.id !== ownerUser.id && <h4 key={participant.id}>{`${participant.nickname},`}</h4>
            })
          )
        }
      </ChatHeader>

      <ChatWrapper>
        <Messages chatId={currentChatId} currentUser={ownerUser} />
      </ChatWrapper>

      <ChatForm onSubmit={onSubmit}>
        <Form.Item>
          <Input id="messageInput" onChange={onChange} value={messageBody} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" onClick={onSubmit} type="primary">Send</Button>
        </Form.Item>
      </ChatForm>
    </ChatContainer>
  )
}
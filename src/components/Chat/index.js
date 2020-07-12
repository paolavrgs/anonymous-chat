import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { ChatHeader, ChatWrapper, ChatMessage, ChatForm } from './styles'
const { TextArea } = Input

export default function ChatShow({ visible, participantUser }) {
  const [messageBody, setMessageBody] = useState('')

  const onChange = (e) => {
    setMessageBody(e.target.value)
  }

  const onSubmit = () => {
  }

  return (
    <div className={`chat-show show-${visible}`}>
      <ChatHeader>
        <h4>{participantUser.nickname}</h4>
      </ChatHeader>

      <ChatWrapper>
        <ChatMessage>Hi paola</ChatMessage>
        <ChatMessage className="own">Hi user</ChatMessage>
      </ChatWrapper>

      <ChatForm>
        <Form.Item>
          <TextArea rows={1} onChange={onChange} value={messageBody} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" onClick={onSubmit} type="primary">Send</Button>
        </Form.Item>
      </ChatForm>
    </div>
  )
}
import React from 'react'
import { Form, Input, Button } from 'antd'
import { ChatHeader, ChatWrapper, ChatMessage, ChatForm } from './styles'
const { TextArea } = Input

export default function ChatShow({ onChange, onSubmit, value }) {
  return (
    <div className="chat-show">
      <ChatHeader>
        <h4>Participant user</h4>
      </ChatHeader>

      <ChatWrapper>
        <ChatMessage>Hi paola</ChatMessage>
        <ChatMessage className="own">Hi user</ChatMessage>
      </ChatWrapper>

      <ChatForm>
        <Form.Item>
          <TextArea rows={1} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" onClick={onSubmit} type="primary">Send</Button>
        </Form.Item>
      </ChatForm>
    </div>
  )
}
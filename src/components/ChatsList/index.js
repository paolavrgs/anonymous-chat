import React from 'react'
import ListOfUsers from '../ListOfUsers'
import { SolutionOutlined, MessageOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'

const { TabPane } = Tabs

export default function ChatsList() {
  return (
    <div className="chat-list">
      <Tabs defaultActiveKey="1">
        <TabPane
          key="1"
          tab={
            <span>
              <MessageOutlined />
              Chats
            </span>
          }
        >
          List of chats
        </TabPane>
        <TabPane
          key="2"
          tab={
            <span>
              <SolutionOutlined />
              Users
            </span>
          }
        >
          <ListOfUsers />
        </TabPane>
      </Tabs>
    </div>
  )
}
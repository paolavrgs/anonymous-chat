import React from 'react'
import { Tabs } from 'antd'
const { TabPane } = Tabs

export default function MainTabs({children}) {
  return (
    <Tabs defaultActiveKey="0">
      {children.map((tab, idx) => {
        return (
          <TabPane tab={tab.props.tabname} key={idx}>
            { tab }
          </TabPane>
        )
      })}
    </Tabs>
  )
}
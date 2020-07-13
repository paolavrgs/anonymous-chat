import React from 'react'
import { Modal } from 'antd'

export default function MainModal({title, modalVisible, hideModal, footer, children}) {

  return (
    <div>
      <Modal
        title={title}
        visible={modalVisible}
        onCancel={hideModal}
        footer={footer}
      >
        {children}
      </Modal>
    </div>
  )
}
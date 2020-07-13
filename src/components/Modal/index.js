import React from 'react'
import { Modal } from 'antd';

export default function MainModal({title, modalVisible, hideModal, children}) {

  return (
    <div>
      <Modal
        title={title}
        visible={modalVisible}
        onCancel={hideModal}
        footer={false}
      >
        {children}
      </Modal>
    </div>
  )
}
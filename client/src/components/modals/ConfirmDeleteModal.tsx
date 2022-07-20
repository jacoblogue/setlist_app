import React, { useState } from "react";
import ReactModal from 'react-modal'
ReactModal.setAppElement('#root')

export const ConfirmDeleteModal: React.FC<any> = ({modalOpenStatus}) => {
  // const [isOpenStatus, setIsOpenStatus] = useState(false)

  return (
    <ReactModal isOpen={modalOpenStatus}>
      <h1>Test Nation</h1>
    </ReactModal>
  )
}
import React, { useState } from "react";
import ReactModal from 'react-modal'
ReactModal.setAppElement('#root')

export const ConfirmDeleteModal: React.FC = () => {
  const [isOpenStatus, setIsOpenStatus] = useState(false)

  return (
    <ReactModal isOpen={isOpenStatus}>

    </ReactModal>
  )
}
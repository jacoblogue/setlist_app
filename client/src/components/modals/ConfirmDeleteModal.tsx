import React, { useState } from "react";
import ReactModal from 'react-modal'
ReactModal.setAppElement('#root')

interface Props {
  modalOpenStatus: boolean
}

export const ConfirmDeleteModal: React.FC<Props> = ({modalOpenStatus}) => {
  return (
    <ReactModal isOpen={modalOpenStatus}>
      <h1>Are you sure?</h1>
      <p>Are you sure you want to delete this song?</p>
      <button>Confirm</button>
      <button>Cancel</button>
    </ReactModal>
  )
}
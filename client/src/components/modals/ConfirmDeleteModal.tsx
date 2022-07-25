import React, { useState } from "react";
import ReactModal from 'react-modal'
import {Button} from 'react-bootstrap'
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
      <Button variant="btn btn-primary">Cancel</Button>
    </ReactModal>
  )
}
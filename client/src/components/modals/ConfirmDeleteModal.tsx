import React, { useState } from "react";
import {Button, Modal} from 'react-bootstrap'

interface Props {
  modalOpenStatus: boolean
}

export const ConfirmDeleteModal: React.FC<Props> = ({modalOpenStatus}) => {
  return (
    <Modal show={modalOpenStatus}>
      <h1>Are you sure?</h1>
      <p>Are you sure you want to delete this song?</p>
      <Button variant="outline-primary">Confirm</Button>
      <Button variant="outline-primary">Cancel</Button>
    </Modal>
  )
}
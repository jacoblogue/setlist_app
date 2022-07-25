import React, { useState } from "react";
import {Button, Modal} from 'react-bootstrap'

interface Props {
  modalOpenStatus: boolean
}

export const ConfirmDeleteModal: React.FC<Props> = ({modalOpenStatus}) => {
  return (
    <Modal show={modalOpenStatus}>
      <Modal.Header>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this song?</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary">Confirm</Button>
        <Button variant="outline-secondary">Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
}
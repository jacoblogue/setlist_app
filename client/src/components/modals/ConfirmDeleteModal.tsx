import React, { useState } from "react";
import {Button, Modal} from 'react-bootstrap'

interface Props {
  modalOpenStatus: boolean
  toggleModal: () => void
  songId: number
  songListUpdated: () => void
}

export const ConfirmDeleteModal: React.FC<Props> = ({songId, modalOpenStatus, toggleModal, songListUpdated}) => {
    //function to delete a song from the database
    const deleteSong = async (id: number) => {
      const response = await fetch(`/song/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      console.log(data);
    }

    const handleConfirm = () => {
      console.log(songId);
      songListUpdated()
      deleteSong(songId)
      toggleModal()
    }
  return (
    <Modal show={modalOpenStatus}>
      <Modal.Header>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this song?</Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={handleConfirm}>Confirm</Button>
        <Button variant="outline-secondary" onClick={toggleModal}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
}
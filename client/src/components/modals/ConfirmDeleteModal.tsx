import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("root");

// modal component for confirming deletion of a song
export const ConfirmDeleteModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
    />
  )
}

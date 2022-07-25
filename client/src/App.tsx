import React, { useState, useEffect } from 'react';
import { NewSongForm } from './components/NewSongForm';
import { SongList } from './components/SongList';
import { ConfirmDeleteModal } from './components/modals/ConfirmDeleteModal'


const App = () => {
  const [refreshToggle, setRefresh] = useState(true)
  const [modalOpenStatus, setModalOpenStatus] = useState(false)
  const songListUpdated = () => {
    setRefresh(!refreshToggle)
  }
  const toggleModal = () => {    
    setModalOpenStatus(!modalOpenStatus)
    console.log(modalOpenStatus);
  }
  return (
    <div>
        <SongList refreshToggle={refreshToggle} songListUpdated={songListUpdated} toggleModal={toggleModal}/>
        <NewSongForm songListUpdated={songListUpdated}/>
        <ConfirmDeleteModal modalOpenStatus={modalOpenStatus} toggleModal={toggleModal}/>
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react';
import { NewSongForm } from './components/NewSongForm';
import { SongList } from './components/SongList';
import { ConfirmDeleteModal } from './components/modals/ConfirmDeleteModal'


const App = () => {
  const [refreshToggle, setRefresh] = useState(true)
  const [modalOpenStatus, setModalOpenStatus] = useState(false)
  const [songId, setSongId] = useState(-1)

  const updateSongId = (id: number) => {
    setSongId(id)
  }

  const songListUpdated = () => {
    setRefresh(!refreshToggle)
  }
  const toggleModal = () => {    
    setModalOpenStatus(!modalOpenStatus)
    console.log(modalOpenStatus);
  }

  return (
    <div>
        <SongList updateSongId={updateSongId} refreshToggle={refreshToggle}  toggleModal={toggleModal}/>
        <NewSongForm songListUpdated={songListUpdated}/>
        <ConfirmDeleteModal songId={songId} modalOpenStatus={modalOpenStatus} toggleModal={toggleModal} songListUpdated={songListUpdated}/>
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react';
import { NewSongForm } from './components/NewSongForm';
import { SongList } from './components/SongList';
import { ConfirmDeleteModal } from './components/modals/ConfirmDeleteModal';

const App = () => {
  return (
    <div>
        <SongList />
        <NewSongForm />
        {/* <ConfirmDeleteModal /> */}
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react';
import { NewSongForm } from './components/NewSongForm';
import { SongList } from './components/SongList';

const App = () => {
  return (
    <div>
        <SongList />
        <NewSongForm />
    </div>
  )
}

export default App
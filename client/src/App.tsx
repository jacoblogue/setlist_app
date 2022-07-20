import React, { useState, useEffect } from 'react';
import { NewSongForm } from './components/NewSongForm';
import { SongList } from './components/SongList';

const App = () => {
  const [refreshToggle, setRefresh] = useState(true)
  const songListUpdated = () => {
    setRefresh(!refreshToggle)
  }
  return (
    <div>
        <SongList refreshToggle={refreshToggle} songListUpdated={songListUpdated}/>
        <NewSongForm songListUpdated={songListUpdated}/>
    </div>
  )
}

export default App
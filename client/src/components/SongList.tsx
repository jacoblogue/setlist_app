import React, {useState, useEffect} from 'react';

interface Song {
  title: string;
  artist: string;
  length: number;
  id: number;
}

export const SongList: React.FC = () => {
  const [songList, setSongList] = useState<Array<Song>>([])

  //function to delete a song from the database
  const deleteSong = async (id: number) => {
    const response = await fetch(`/song/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }


  //fetch songList from api and set it to songList
  useEffect(() => {
    const fetchSongList = async () => {
      const response = await fetch('/songs');
      const json = await response.json();
      setSongList(json)            
    }
    fetchSongList()
    .catch(console.error)
  } 
  , [])


  return (
    <div>
      <h1>Songs:</h1>
      {(songList.length === 0) ? (
        <p>Loading songs...</p>
      ) : (
        songList.map((song: Song, i: number) => {
          return <ul key={i}>
            <li><strong>Title:</strong> {song.title}</li>
            <li><strong>Artist:</strong> {song.artist}</li>
            <li><strong>Length:</strong> {Math.floor(song.length / 60)}:{(song.length % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}</li>
            <button onClick={() => {deleteSong(song.id)}}>Delete</button>
          </ul>
      }))}
    </div>
  )
}
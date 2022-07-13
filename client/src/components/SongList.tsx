import React, {useState, useEffect} from 'react';

interface Song {
  title: string;
  artist: string;
  length: number;
  id: number;
}

interface SongBank {
  [key: string]: any;
}

export const SongList: React.FC = () => {
  const [songList, setSongList] = useState<SongBank>([{}])

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
      {console.log(songList[0].title)} {/* for debugging -- should probably be something different */}
      
      {(typeof songList[0].title === 'undefined') ? (
        <p>Loading songs...</p>
      ) : (
        songList.map((song: Song, i: number) => {
          return <ul key={i}>
            <li><strong>Title:</strong> {song.title}</li>
            <li><strong>Artist:</strong> {song.artist}</li>
            <li><strong>Length:</strong> {Math.floor(song.length / 60)}:{(song.length % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}</li>
          </ul>
      }))}

    </div>
  )
}
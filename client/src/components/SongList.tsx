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
    const fetchsongList = async () => {
      const response = await fetch('/songs');
      const json = await response.json();
      setSongList(json)      
    }
    fetchsongList()
    .catch(console.error)
  } 
  , [])

  const songListItems = songList.map((song: Song) => {
    return <li key={song.id}>{song.title}</li>
  }
  )

  return (
    <div>
      <h1>Songs:</h1>
      {songList.map((song: Song, i: number) => {
          return <p key={i}><strong>Song {i+1}:</strong> {song.title} <strong>by:</strong> {song.artist}</p>
      })}

    </div>
  )
}
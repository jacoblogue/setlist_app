import React, { useState } from 'react'

import { useForm } from '../hooks/useForm'

interface Props {
  songListUpdated: () => void
}

export const NewSongForm: React.FC<Props> = ({ songListUpdated }) => {
  // defining the initial state for the form
  const initialState = {
    title: '',
    artist: '',
    length: 0
  }

  // const { songListUpdated } = props;

  // getting the event handlers from our custoom hook
  const { onChange, onSubmit, values } = useForm(addSongCallback, initialState)

  // a submit function that will execute upon form submission
  async function addSongCallback() {
    const response = await fetch('/song', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    const json = await response.json()
    songListUpdated()
  }

  return (
    // form to add a new song
    <div>
      <h2>Add a new song:</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='title'>Title:</label>
        <input name="title" onChange={onChange} />
        <label htmlFor='artist'>Artist:</label>
        <input name="artist" onChange={onChange} />
        <label htmlFor='length'>Length:</label>
        <input name="length" onChange={onChange} />
        <button type="submit">Add Song</button>
      </form>
    </div>
  )
}
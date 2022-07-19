import React, { useState } from 'react'

import { useForm } from '../hooks/useForm'

export const NewSongForm: React.FC = () => {
  // defining the initial state for the form
  const initialState = {
    title: '',
    artist: '',
    length: 0
  }

  // getting the event handlers from our custoom hook
  const { onChange, onSubmit, values } = useForm(addSongCallback, initialState)

  // a submit function that will execute upon form submission
  async function addSongCallback() { //  doublecheck this ** where I left off**
    const response = await fetch('/song', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    const json = await response.json()
    console.log(json)
  }

  return (
    // form to add a new song
    <form onSubmit={onSubmit}>
      <label>Title:</label>
      <input name="title" onChange={onChange} />
      <label>Artist:</label>
      <input name="artist" onChange={onChange} />
      <label>Length:</label>
      <input name="length" onChange={onChange} />
      <button type="submit">Add Song</button>
    </form>
  )
}
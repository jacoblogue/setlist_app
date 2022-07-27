import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

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
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='title'>Title:</Form.Label>
          <Form.Control name='title' type='text' onChange={onChange}/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='artist'>Artist:</Form.Label>
          <Form.Control name='artist' type='text' onChange={onChange}/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='length'>Length:</Form.Label>
          <Form.Control name='length' type='number' onChange={onChange}/>
        </Form.Group>
        <Button type='submit'>Add Song</Button>
      </Form>
    </div>
  )
}
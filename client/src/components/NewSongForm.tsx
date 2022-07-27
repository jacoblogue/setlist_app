import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import { useForm } from '../hooks/useForm'

interface Props {
  songListUpdated: () => void
}

export const NewSongForm: React.FC<Props> = ({ songListUpdated }) => {
  const [validated, setValidated] = useState(false)
  // defining the initial state for the form
  const initialState = {
    title: '',
    artist: '',
    length: 0
  }

  // getting the event handlers from our custom hook
  const { onChange, onSubmit, values } = useForm(addSongCallback, initialState)

  // a submit function that will execute upon form submission
  async function addSongCallback(event:any) {
    const form = event.currentTarget;
    console.log(form.checkValidity());
    
    setValidated(true)
    if (form.checkValidity()) {
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
  }

  return (
    // form to add a new song
    <div>
      <h2>Add a new song:</h2>
      <Form noValidate onSubmit={onSubmit} validated={validated} >
        <Form.Group className='mb-3' controlId='title'>
          <Form.Label>Title:</Form.Label>
          <Form.Control type='text' onChange={onChange} required placeholder='Song Title'/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='artist'>Artist:</Form.Label>
          <Form.Control name='artist' type='text' onChange={onChange} required placeholder='Artist'/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='length'>Length in seconds:</Form.Label>
          <Form.Control name='length' type='number' onChange={onChange} required placeholder='Song Length'/>
        </Form.Group>
        <Button type='submit'>Add Song</Button>
      </Form>
    </div>
  )
}
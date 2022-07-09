import React, { useState, useEffect } from 'react';
import { MemberList } from './components/MemberList';
import { TextField } from "./components/TextField"

const App = () => {
  return (
    <div>
        <MemberList />

        <TextField text='hello' person={{firstName: '', lastName: ''}} />

    </div>
  )
}

export default App
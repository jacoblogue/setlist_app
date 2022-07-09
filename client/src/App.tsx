import React, { useState, useEffect } from 'react';
import { MemberList } from './MemberList';
import { TextField } from "./TextField"

const App = () => {
  return (
    <div>
        <MemberList />

        <TextField text='hello' person={{firstName: '', lastName: ''}} />

    </div>
  )
}

export default App
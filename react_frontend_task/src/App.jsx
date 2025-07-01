import React, { useState } from 'react'
import UserCard from './components/UserCard'


function App() {
  const [name]=useState("Vaishnavi Padwal")
  const [email]=useState("vaishnavi@gmail.com")
  const [role]=useState("Full Stack Developer")
 
  return (
    <div>
      <UserCard name={name} email={email} role={role}/>
    </div>
  )
}

export default App

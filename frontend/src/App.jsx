import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [messages, setMessage] = useState([]);

  useEffect (()=>{
    axios.get('/api/jobs')
    .then((response)=>{
      setMessage(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
      <h1>This is test frontend codev </h1>
      <p>Total Message frombackend - {messages.length}</p>

      {
        messages.map((message, index) => (
          <div key={message.id}>
            <h2>{message.personName}</h2>
            <p>{message.designation}</p>
          </div>
        ))
      }

    </>
  )
}

export default App

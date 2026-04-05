import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
 const [jokes, setJokes] = useState([])


 useEffect(() => {
  axios.get('/api/jokes')
  .then((response) => {
    setJokes(response.data)
  })
  .catch((error) => {
    console.log(error);
  })
 })
  return (
    <>
     <h1>Space N Full Stack</h1>
     <p>JOKES: {jokes.length}</p>
     {
      jokes.map((joke , idx) => (
        <div className="" key={joke.id}>
          <h3>{joke.type}</h3>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </div>
      ))
     }
    </>
  )
}
export default App

import React, { useEffect, useState } from 'react'

const App = () => {
  const [friends, setFriends] = useState(["person","one"])

  const addFriend = () => setFriends([...friends, "two"])
  const removeFriend = () => setFriends(friends.filter(f => f !== 'person'))
  return (
    <div>
      {
        friends.map(f => (
          <ul>
            <li>{f}</li>
          </ul>
        ))
      }

      <button onClick={addFriend}>ADD</button>
      <button onClick={removeFriend}>REMOVE</button>

      <Example />

    </div>
    
  )
}

export default App


const Example = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem('name')
    return savedName? JSON.parse(savedName) : ''
  })

useEffect(() => {
  localStorage.setItem('name', JSON.stringify(name))
},[name])

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleClear = () => {
    setName('')
  }

  return(
    <div className="">
      <h1>YOUR NAME: {name}</h1>
      <input type="text" value={name} onChange={handleChange} placeholder='ENTER YOUR NAME' />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  )
}
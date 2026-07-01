import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if(input.trim()){
            setTodos([...todos, input]);
            setInput('')
        }
    }

    const handleChange = e => {
        setInput(e.target.value);
    }
  return (
    <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} placeholder='Enter your task' onChange={handleChange} />
            <button type="submit">Add task</button>
        </form>

        <ul>
            {
                todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList
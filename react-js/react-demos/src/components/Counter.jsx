import React, { useReducer, useState } from 'react'
import { initialState, counterReducer } from './counterReducer'

const Counter = () => {
    
   const[state, dispatch] = useReducer(counterReducer,initialState)
   const [inputValue, setInputValue] = useState(0);

   const handleIncrement = () => dispatch({type: 'increment'})
   const handleDecrement = () => dispatch({type: 'decrement'})
   const handleIncrememtByAmount = () =>{ 
    dispatch({type: 'incrementByAmount' , payload: +inputValue})
    setInputValue(0)
   }
   const handleDecrementByAmount = () =>{ dispatch({type: 'decrementByAmount', payload: +inputValue})
   setInputValue(0)
   }
  return (
    <div>
        <h1>
            Count: {state.count}
        </h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>

    <div className="">
        <input type="number" name="" id="" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

        <button onClick={handleIncrememtByAmount}>ADD</button>
        <button onClick={handleDecrementByAmount}>SUB</button>
    </div>

        </div>
  )
}

export default Counter
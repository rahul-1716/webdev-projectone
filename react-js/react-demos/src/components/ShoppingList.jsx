import React, { useState } from 'react'

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('')

    const handleSubmit = e => {
        e.preventDefault();

        if(!name || !quantity) return;

        const newItem = {
            name,
            quantity: parseInt(quantity),
        }

        setItems((prevItem) => [...prevItem, newItem])
        setName('')
        setQuantity('')
    }
  return (
    <div>
        <h1>Shopping List</h1>
        <form action="" onSubmit={handleSubmit}>
            <input 
            type="text"
            name=""
            id=""
            placeholder='item name'
            value={name}
            onChange={(e) => setName(e.target.value)} />
            
            <input 
            type="number"
            name=""
            id=""
            placeholder='quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)} />

            <button type="submit">Add Item</button>
        </form>

        <ul>
            {
                items.map((item, index) => (
                    <li key={index}>
                        {item.name} - Quantity: {item.quantity} pc/s
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ShoppingList
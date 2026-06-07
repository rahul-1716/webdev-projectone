import React from 'react'

const MainContent = () => { 
    const product = [
        {
        name : "LAPTOP",
        price : 1200,
        availability : "In Stock"
        },
        {
        name : "LAPTOP",
        price : 1200,
        availability : "In Stock"
        },
        {
        name : "LAPTOP",
        price : 1200,
        availability : "In Stock"
        },
    ]
    const numbers = [1,2,3,4,5]
  return (
    <main>
        <h2>Main Content</h2>
        <p>This is the Main Content text!</p>

    {product.map(({name,price,availability}, index) => (
        <ul key={index}>
            <li>{name}</li>
            <li>{price}</li>
            <li>{availability}</li>
        </ul>
    ))
    }
    </main>
  )
}

export default MainContent

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

    const usersInfo = [
        {
            name: "Rahul",
            age: 21,
            role: "FULL STACK"
        },
        {
            name : "Space",
            age: 21,
            role: "IMMORTAL 3 COACH"
        },
        {
            name: "Gugalu",
            age: 21,
            role: "FILLER"
        }
    ]
    const numbers = [1,2,3,4,5]
    const date = new Date();
  return (
    <main>
        <h2>Main Content</h2>
        <p>This is the Main Content text!</p>
        <p>Today's date is {date.getDate()}</p>

    {product.map(({name,price,availability}, index) => (
        <ul key={index}>
            <li>{name}</li>
            <li>{price}</li>
            <li>{availability}</li>
        </ul>
    ))
    }

    {
        numbers.map((number) => (
            <ul>
                <li>{number}</li>
            </ul>
        ))
    }

    {
        usersInfo.map(({name, age, role},index) =>(
            <ul>
                <li>{name}</li>
                <li>{age}</li>
                <li>{role}</li>
                <li>{index}</li>
            </ul>
        ) )
    }
    </main>
  )
}

export default MainContent;

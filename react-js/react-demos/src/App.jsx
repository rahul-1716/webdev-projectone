import React from 'react'
import Person from './components/Person'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <Person name="Rahul" age={21} />
      <Product name="IPHONE" price={1299} />
    </div>
  )
}

export default App

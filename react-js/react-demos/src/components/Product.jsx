import React from 'react'

const Product = ({name , price}) => {
  return (
    <div>
      <h1>Product: {name}</h1>
      <h1>Price: {price}</h1>
    </div>
  )
}

export default Product

import React from 'react'

const StyledCard = () => {
  const styles = {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "10px",
    color: "darkblue"
  }
  return (
    <div className='card' style={styles}>
      <h4>Title: Title Text Goes Here</h4>
      <h5>Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat neque earum voluptatum odit, totam a id ut cumque architecto debitis exercitationem? Cupiditate explicabo sint ducimus quaerat similique quia id quis.</h5>
    </div>
  )
}

export default StyledCard
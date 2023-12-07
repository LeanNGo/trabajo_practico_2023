import React from 'react'

const Cards = ({id, name, image}) => {
  return (
    <div className='card' key={id}>    
        <h2>{name}</h2>
        <div className="cardImage">            
        <img src={image} alt={name} />
        </div>   
    </div>
    
  )
}
export default Cards
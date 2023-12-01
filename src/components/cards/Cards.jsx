import React from 'react'

const Cards = ({section}) => {
  return (
    <>
        <h2>{section}</h2>
        <div class="componente">            
            <div class="card"><a href="">card1</a></div>
            <div class="card"><a href="">card2</a></div>
            <div class="card"><a href="">card3</a></div>
            <div class="card"><a href="">card4</a></div>
            <div class="card"><a href="">card5</a></div>
            <div class="card"><a href="">card6</a></div>
            <div class="card"><a href="">card7</a></div>
        </div>       
    </>
    
  )
}

export default Cards
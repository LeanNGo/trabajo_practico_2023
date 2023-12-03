import React from 'react'

const GroupCards = ({movies, renderItem}) => {
  return (
    <div>
        {movies.map((item)=>{
            return renderItem(item)
        })}
    </div>
  )
}

export default GroupCards
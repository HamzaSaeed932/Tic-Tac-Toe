import React from 'react'

const Square = ({value,handleClick,index}) => {

  return (
    <button onClick={()=>handleClick(index)}>{value}</button>
  )
}

export default Square
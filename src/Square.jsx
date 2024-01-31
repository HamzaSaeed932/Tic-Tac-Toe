import React from 'react'

const Square = ({value,handleClick,index}) => {

  return (
    <button className='Square-btn' onClick={()=>handleClick(index)}>{value}</button>
  )
}

export default Square
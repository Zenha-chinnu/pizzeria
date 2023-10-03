import React from 'react'

function MenuItem({id,image,name,price}) {
  return (
    <div className='menuItem'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{id}.{name}</h1>
        <p>Rs.{price}</p>
    </div>
  )
}

export default MenuItem

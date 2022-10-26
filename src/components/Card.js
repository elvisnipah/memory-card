import React from 'react'

function Card(props) {
  return (
    <div className='card--container'>
      <img src={props.src} alt="" className='card--image'/>
      <p className='card--description'>{props.description}</p>
    </div>
  )
}

export default Card
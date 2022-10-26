import React from 'react'

function Card(props) {
  const cardID = props.id
  return (
    <div className='card--container' onClick={(event) => props.onclick(event, cardID)}>
      <img src={props.src} alt="" className='card--image'/>
      <p className='card--description'>{props.description}</p>
    </div>
  )
}

export default Card
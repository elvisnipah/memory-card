import React from 'react'

function Scoreboard(props) {
  return (
    <div className='scoreboard'>
      <p>Current Score: {props.currentscore}</p>
      <p>Highest Score: {props.highestscore}</p>
    </div>
  )
}

export default Scoreboard
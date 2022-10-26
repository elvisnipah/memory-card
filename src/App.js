import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import data from "./data.js"

function App() {

  const [gameData, setGameData] = useState(data)
  const [currentScore, setCurrentScore] = useState(0)
  const [highestSore, setHighestScore] = useState(0)

  function addToScore(event, cardID) {
    event.stopPropagation()
    for (let i = 0; i < gameData.length; i++) {
      if (gameData[i].id === cardID && gameData[i].clicked) {
        console.log("You've already clicked this.")
      } 
      else if (gameData[i].id === cardID && gameData[i].clicked === false) {
        setCurrentScore(prevScore => {
          return prevScore + 1
        })
        setGameData(prevGameData => {
          return prevGameData.map(prevCard => prevCard.id === cardID ? {...prevCard, clicked: true} : prevCard)
        })
        console.log("You haven't clicked this")
      }
    } 
  }

  const cards = gameData.map(card => {
    return (
      <Card
        onclick={addToScore}
        description={card.name}
        src={card.src}
        key={card.id}
        id={card.id}
        clickedStatus={card.clicked}
      />
    )
  })

  return (
    <div className="App">
      <div>
        <Scoreboard
          currentscore={currentScore} 
        />
      </div>
      <div className="container">
        {cards}
      </div>
    </div>
  );
}

export default App;

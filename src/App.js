import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import data from "./data.js"
import arrayShuffle from "array-shuffle"
function App() {

  const [gameData, setGameData] = useState(data)
  const [currentScore, setCurrentScore] = useState(0)
  const [highestScore, setHighestScore] = useState(0)

  function shuffleCards(){
    setGameData(prevGameData => arrayShuffle(prevGameData))
  }

  function addToScore(event, cardID) {
    event.stopPropagation()
    for (let i = 0; i < gameData.length; i++) {
      if (gameData[i].id === cardID && gameData[i].clicked) {
        console.log("You've already clicked this.")
        
        if (currentScore > highestScore) {
          setHighestScore(currentScore)
        }
        setCurrentScore(0)
        setGameData(data)
        shuffleCards()
      } 
      else if (gameData[i].id === cardID && gameData[i].clicked === false) {
        setCurrentScore(prevScore => {
          return prevScore + 1
        })
        setGameData(prevGameData => {
          return prevGameData.map(prevCard => prevCard.id === cardID ? {...prevCard, clicked: true} : prevCard)
        })
        shuffleCards()
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
      <div className='heading'>Get points by clicking on an image but don't click on it any more than once!</div>
      <Scoreboard
        currentscore={currentScore} 
        highestscore={highestScore}
      />
      <div className="container">
        {cards}
      </div>
    </div>
  );
}

export default App;

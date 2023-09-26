import { useEffect, useState } from "react";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";
import data from "./data.js";
import arrayShuffle from "array-shuffle";
import bgImage from "./images/mass-eff-bg.jpg";
import logoImage from "./images/logo-masseffect.png";
import WinScreen from "./components/WinScreen";
import LoseScreen from "./components/LoseScreen";

function App() {
  const [gameData, setGameData] = useState(data);
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  function shuffleCards() {
    setGameData((prevGameData) => arrayShuffle(prevGameData));
  }

  useEffect(() => {
    shuffleCards();
  }, []);

  function addToScore(event, cardID) {
    event.stopPropagation();
    for (let i = 0; i < gameData.length; i++) {
      if (gameData[i].id === cardID && gameData[i].clicked) {
        if (currentScore > highestScore) {
          setHighestScore(currentScore);
        }
        setCurrentScore(0);
        setGameOver(true);
        if (currentScore === data.length) {
          setGameWon(true);
        }
        setGameData(data);
        // shuffleCards();
      } else if (gameData[i].id === cardID && !gameData[i].clicked) {
        setCurrentScore((prevScore) => {
          return prevScore + 1;
        });
        setGameData((prevGameData) => {
          return prevGameData.map((prevCard) =>
            prevCard.id === cardID ? { ...prevCard, clicked: true } : prevCard
          );
        });
        shuffleCards();
      }
    }
  }

  const restartGame = () => {
    setGameOver(false);
    shuffleCards();
  };

  const cards = gameData.map((card) => {
    return (
      <Card
        onclick={addToScore}
        description={card.name}
        src={card.src}
        key={card.id}
        id={card.id}
        clickedStatus={card.clicked}
      />
    );
  });

  return (
    <main
      id="app"
      className="bg-fixed bg-center flex flex-col items-center p-4 gap-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <img src={logoImage} alt="" className="w-[160px]" />

      {!gameOver ? (
        <>
          <Scoreboard currentscore={currentScore} highestscore={highestScore} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cards}
          </div>
        </>
      ) : gameWon ? (
        <WinScreen restart={restartGame} />
      ) : (
        <LoseScreen restart={restartGame} />
      )}
    </main>
  );
}

export default App;

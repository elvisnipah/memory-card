import './App.css';
import Card from './components/Card';
import data from "./data.js"

function App() {

  const cards = data.map(card => {
    return (
      <Card
        description={card.name}
        src={card.src}
        key={card.id}
      />
    )
  })
  return (
    <div className="App">
      <div className="container">
        {cards}
      </div>
    </div>
  );
}

export default App;

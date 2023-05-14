import Card from "./components/Card";
import "./App.css";

const renderCardElement = () => {
  const listCard = [];
  for(let i = 0; i < 52; i++) {
    listCard.push(<Card />)
  };
  return listCard
}

function App() {
  return <div className="container">{renderCardElement()}</div>;
}

export default App;

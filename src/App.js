import Card from "./components/Card";
import './App.css';
import { card1, card2 } from "./data/Data";

function App() {
  return (
    <>
      <Card {...card1}>{<img src={card1.src} className="card-img-top" alt="..." />}</Card>
      <Card {...card2} />
    </>
  );
}

export default App;

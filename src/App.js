import React, {useState} from "react";
import Deck from './components/deck';

const App = () => {
  const[message] = useState("Pests Memory Game")
  const[score,setScore] = useState(0)
  const[bestScore,setBestScore] = useState(0)

  const handleClick = () => {
    setScore(score+1);
  };
  
  const defineBest =()=>{
    if(score>bestScore){
      setBestScore(score);
    }
    setScore(0);
  }

  return (
    <>
      <div className="header">
        <div className="title">{message}</div>
        <div className="score-holder">
          <div>Score: {score}</div>
          <div>Best Score: {bestScore}</div>
        </div>
      </div>
      <Deck defineBest={defineBest} onClick={handleClick}/>
    </>
  )
}

export default App
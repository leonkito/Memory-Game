
import React, {useState} from "react";
const App = () => {
  const[message] = useState("Pests Memory Game")
  const[score,setScore] = useState(0)
  const[bestScore,setBestScore] = useState(0)
  return (
    <div className="header">
      <div className="title">{message}</div>
      <div className="score-holder">
        <div>Score: {score}</div>
        <div>Best Score: {bestScore}</div>
      </div>
    </div>
  )
}

export default App
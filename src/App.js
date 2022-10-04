
import React, {useState} from "react";



const App = () => {
  const[message] = useState("Pests Memory Game")

  return (
    <div className="header">{message}</div>
  )
}

export default App
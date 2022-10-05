import React, {useState} from "react";
import Card from './card';
import pests from './repository';

const Deck = () =>{
    const[deck,setDeck] = useState([...pests].sort(() => Math.random() - 0.5));

    const handleClicked = () => {
        const sorted = [...deck].sort(() => Math.random() - 0.5)
        setDeck(sorted);
    };
    return (
        <div className="grid" >
            {deck.map(card => {
            return (
                    <Card 
                    onClick={handleClicked}
                    key={card.description.toString()}
                    description={card.description}
                    imgUrl={card.img}
                    />
            )})}
            <button onClick={handleClicked}>click</button>
      </div>
    )
}

export default Deck
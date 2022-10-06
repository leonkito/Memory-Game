import React, {useState} from "react";
import Card from './card';
import pests from './repository';

const Deck = (props) =>{
    const[deck,setDeck] = useState([...pests].sort(() => Math.random() - 0.5));
    const[cardsClicked,setCardsClicked]= useState([]);

    const handleClick = (cardName) => {
        setDeck([...deck].sort(() => Math.random() - 0.5));
        props.onClick()
        const card = cardName
        if (cardsClicked.includes(card)){
            setCardsClicked([])
            props.defineBest();
        } else{
            setCardsClicked((prevState) => [...prevState, card])
        }
    };
    
    const callScore = () =>{
        props.defineBest();
    }

    return (
        <div className="grid" >
            {deck.map(card => {
            return (
                <Card
                callScore={callScore}
                onClick={handleClick}
                key={card.description.toString()}
                description={card.description}
                imgUrl={card.img}
                />
            )})}
      </div>
    )
}

export default Deck
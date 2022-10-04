import React, {useState} from "react";
import Card from './card';
import myArray from './repository';

const Deck = () =>{
    let items =[]
    let list = [0,1,2,3,4,5,6,7,8,9,10,11]
    const [rerender, setRerender] = useState(false);

    const handleClick = () => {
        list = list.sort(() => Math.random() - 0.5)
        for(let i =0;i<12;i++){
            items.push(<Card description={myArray[list[i]].description} onClick={handleClick} imgUrl={myArray[list[i]].img}/>)
        }
        setRerender(!rerender);
    }

    for(let i =0;i<myArray.length;i++){
        items.push(<Card description={myArray[i].description} onClick={handleClick} imgUrl={myArray[i].img}/>)
    }

    return(
        <div className="grid">
            {items}
            <button onClick={handleClick}>click me</button>
        </div>
    );
}

export default Deck
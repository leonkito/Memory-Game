import React, {useState} from "react";

const Card = (props)=>{
    const[description] = useState(props.description) 
    const[imgUrl] = useState(props.imgUrl)
    const[index, setIndex] = useState(0)
    const handleClick = () => {
        setIndex(index +1);
        props.onClick();
    }
    return(
    <div className="card" onClick={handleClick}>
        <div className="img-holder">
            <img className="card-img" src={imgUrl} alt="wind icon"/>
        </div>
        <div className="title-holder">
            <h4 className="card-name"> {description} {index}</h4>
        </div>
    </div>
    );
}
export default Card
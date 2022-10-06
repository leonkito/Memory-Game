import React, {useState} from "react";

const Card = (props)=>{
    const[description] = useState(props.description) 
    const[imgUrl] = useState(props.imgUrl)
    const handleClick = () => {
        props.onClick(description.toString());
    }

    return(
    <div className="card" onClick={handleClick}>
        <div className="img-holder">
            <img className="card-img" src={imgUrl} alt="wind icon"/>
        </div>
        <div className="title-holder">
            <h4 className="card-name"> {description}</h4>
        </div>
    </div>
    );
}
export default Card
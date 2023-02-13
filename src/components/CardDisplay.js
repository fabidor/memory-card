import React from "react";

const CardDisplay = (props) =>{
    const cardDisplay = props.card;

    return(
        <div id={cardDisplay.id} className = "card" >
            <img id={cardDisplay.id} className="digimonPic" src={cardDisplay.src} alt=""></img>
            <div id={cardDisplay.id} className="cardName">{cardDisplay.name}</div>
        </div>
    )
}

export default CardDisplay;
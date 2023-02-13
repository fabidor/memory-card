import React, {useState, useEffect} from 'react';
import CardDisplay from "./CardDisplay.js"

const GameDisplay = (props) =>{
    const [cards, scrambleCards] = useState(props.cardList);
    const[shuffleTime, setShuffleTime] = useState(false);
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    const memoryFix = (e) =>{
        props.checkPick(e.target.id);
        setShuffleTime(shuffleTime => true);
        console.log(e.target.id);
        
        
        
    }
    useEffect(() => {
        if(shuffleTime === true){
            scrambleCards((cards) => shuffle(cards))
            setShuffleTime(shuffleTime => false);
        }
    })
    
    return(
        <div className="cardBoard">
        {cards.map(card => {
            return(
            <div key={card.id} onClick={memoryFix} id={card.id}>
                 <CardDisplay card={card}/>
                </div>
            )
            
        })
    } 
        </div>
    )
}

export default GameDisplay;
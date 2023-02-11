import React, {useState, useEffect} from 'react';

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
        setShuffleTime(shuffleTime => true);
        props.checkPick(e.target.id);
        
    }
    useEffect(() => {
        if(shuffleTime === true){
            scrambleCards((cards) => shuffle(cards))
            setShuffleTime(shuffleTime => false);
        }
    })
    
    return(
        <div>
        {cards.map(card => {
            return(
            <div key={card.id} id={card.id} onClick={memoryFix}>{card.name}</div>)
            
        })
    } 
        </div>
    )
}

export default GameDisplay;
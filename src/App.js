import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import GameDisplay from "./components/GameDisplay.js"
import alphamonPic from './pictures/640px-Alphamon_ouryuken.jpeg'
import bibimonPic from "./pictures/640px-Bibimon.jpeg"
import digitamamonpic from "./pictures/640px-Digitamamon_bandai.jpeg"
import ebiburgamonpic from "./pictures/640px-Ebiburgamon.jpeg"
import batterymonpic from "./pictures/Batterymon.jpeg"
import bottamonpic from "./pictures/Botamon.jpeg"
import chibikiwipic from "./pictures/ChibiKiwimon.jpeg"


const App = () => {
  const [cardList, setCards] = useState([
    {id: 1, name: "Alphamon", src: alphamonPic},
    {id: 2, name: "Bibimon", src: bibimonPic},
    {id: 3, name: "Digitamamon", src:digitamamonpic},
    {id: 4, name: "Ebiburgamon", src: ebiburgamonpic},
    {id: 5, name: "Batterymon", src:batterymonpic},
    {id: 6, name: "Bottamon", src:bottamonpic},
    {id: 7, name: "Chibikiwimon", src:chibikiwipic}
  ]);
  
  
  const [usedCards, setUsed] = useState([-1]);
  const[currentScore, setScore] = useState(0);
  const[hiScore, setHiScore] = useState(0);
  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);

  const checkPick = (id) =>{
    if(!usedCards.includes(id)){
      setSuccess(true);
      setUsed([...usedCards,id]);
    } else{
      setFail(true);
    }
  }
  useEffect(() =>{
    if(currentScore>hiScore){
      setHiScore(currentScore);
    }
  },[currentScore]);
  useEffect(() =>{
    if(success === true){
      setScore(currentScore+1)
      setSuccess(false);
      console.log(usedCards);
      console.log(currentScore);
      console.log(hiScore);
    }
  }, [success, currentScore, hiScore, usedCards]);
  useEffect(() => {
    if(fail === true){
      setScore(0);
      setUsed([-1]);
      setFail(false);
    }
  }, [fail])
  return (
    <div className="App">
      <div className="header">
        <div className="title">The Memory Matchification Game</div>
        <div className="scoreBox">
          <div className="currentScore">Current Score: {currentScore}</div>
          <div className="hiScore">High Score: {hiScore}</div>
        </div>
      </div>
      <GameDisplay cardList = {cardList} checkPick = {checkPick} />
    </div> 
    )

}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;

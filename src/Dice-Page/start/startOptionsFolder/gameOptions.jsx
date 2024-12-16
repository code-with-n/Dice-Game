import { useState } from "react";
import style from "/Users/ns1ns/ReactProject/DiceGame/dice-game/src/Dice-Page/start/startPage.module.css";

const GameOptions = ({ winner,setNum,getNum}) => {
  console.log("game options run....");
//   let [getNum, setNum] = useState();
  const onClickRun = () => {
    console.log("dice clicked");
    let chooseRandom = Math.floor(Math.random() * 6) + 1;
    // console.log(chooseRandomNumber)
    setNum(chooseRandom);
   
    winner(chooseRandom);
  };
  return (
    <>
      <div className={style.optionsBox}>
        <div className={style.diceBox} onClick={onClickRun}>
          {getNum}
        </div>
        <div className={style.playBox}>
          <button className={style.button} onClick={onClickRun}>
            Play
          </button>
        </div>
        <div className={style.resetScore}>
          <button className={style.button}>ResetScore</button>
        </div>
      </div>
    </>
  );
};

export default GameOptions;

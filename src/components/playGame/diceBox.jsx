import style from "./play.module.css";
// import { StartContext } from "../../store/startContext/startcontext";
import { useContext } from "react";
// import img1 from './components/playGame/dice_1.png';
// import img2 from "C:\Users\ns1ns\ReactProject\DiceGame\dice-game\src\components\playGame\dice_2.png"
// import img2 from './components/playGame/dice_2.png';


const DiceBox = ({  diceNum, onHandleClick,resetButtonClicked}) => {
  // const { setFinalScore } = useContext(startContext);

  
 
  return (
    <>
      <div className={style.diceGameBox}>
        <div className={style.dicePng}> <img src={`./image/dice_${diceNum}.png`} alt="" /></div>
        <div className={style.diceStart}>
          <button onClick={()=>onHandleClick(diceNum)}>Start</button>
        </div>
        <div className={style.reset}>
          <button onClick={resetButtonClicked}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default DiceBox;

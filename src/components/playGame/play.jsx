import { useContext, useState } from "react";
import style from "./play.module.css";
import DiceBox from "./diceBox";
import startContextProvider from "../../store/startContext/startcontext";
import ScoreNum from "./scoreNum";
// import startContextProvider from "../../store/startContext/startcontext";

const PlayGame = ({setTotal,total}) => {
  let arr = [1, 2, 3, 4, 5, 6];
  const [selectedNum, setSelectedNum] = useState();
  const [diceNum, setDiceNum] = useState(1);
  const [error, setError] = useState();

  //  code of reset button
  const resetButtonClicked = () => {
    setSelectedNum();
    setDiceNum(1);
    setTotal(0)
    setError();
    console.log("everything reseted");
  };
  
  // combine logic for start button click and compare  value of random number or selected numbere
  // if selectedNumber or random number will not be equal so will -2 from scoreBox;
  const onHandleClick = (e) => {
    if (!selectedNum ) {
      setError("you have not selected anything please select..")
      return;
    }

    let randomNum = Math.floor(Math.random() * 6) + 1;
    // console.log(randomNum);
    console.log("onHandleClick run");
    setDiceNum((prev) => randomNum);
   
    if (randomNum===selectedNum) {
      
      setTotal((prev)=> prev+randomNum);
    }else{
      
      setTotal((prev)=>prev-2);

    }

  };

  return (
    <>
      <div className={style.container}>
        <ScoreNum
          arr={arr}
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
          setError = {setError}
          total ={total}
          error ={error}
        ></ScoreNum>

        <DiceBox diceNum={diceNum} onHandleClick={onHandleClick} resetButtonClicked={resetButtonClicked}></DiceBox>
      </div>
    </>
  );
};

export default PlayGame;

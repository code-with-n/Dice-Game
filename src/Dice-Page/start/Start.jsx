import style from "./startPage.module.css";
import GameOptions from "./startOptionsFolder/gameOptions";
import ShowScore from "./startOptionsFolder/showScore";
import ChooseNumber from "./startOptionsFolder/chooseNumber";
import { useState } from "react";
const Start = ({onClickNum,winner,val}) => {
  let [getNum,setNum] = useState();
  return (
    
    <>
      <div className={style.start}>
        {/* <h4>this is first page</h4> */}
        <div className={style.scoreNumber}>
          <ShowScore val={val} getNum={getNum}></ShowScore>
          <ChooseNumber onClickNum={onClickNum} ></ChooseNumber>
        </div>
        <GameOptions winner = {winner}  setNum ={setNum} getNum={getNum}></GameOptions>
      </div>
    </>
  );
};

export default Start;

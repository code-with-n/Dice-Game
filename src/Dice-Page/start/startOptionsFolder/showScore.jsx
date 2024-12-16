import { useState } from "react";
import style from "/Users/ns1ns/ReactProject/DiceGame/dice-game/src/Dice-Page/start/startPage.module.css"


const ShowScore = ({val,getNum})=>{
  

    
    return<>
       <div className={style.scoreBox}>
            {val}
       </div>
      
    </>
}

export default ShowScore;
import { useEffect, useRef, useState } from "react";
import Pages from "./Dice-Page/pages";
import Welcome from "./Dice-Page/welcome-page/welcome";
import style from "./app.module.css";

import Start from "./Dice-Page/start/Start";
import RulesPage from "./Dice-Page/rules/Rules";
import { ListContext } from "../../../SocialMedia/social/src/store/listProvider";

const conditon = (selectTab, setTab, onClickNum, winner,val) => {
  if (selectTab == "Start") {
    console.log("this is Start page");
    // console.log(chooseRandomNumber)
    return <Start onClickNum={onClickNum} winner={winner}  val={val}/>;
  } else if (selectTab == "Rules") {
    console.log("this is Rules page");
    return <RulesPage setTab={setTab} selectTab={selectTab} />;
    // return <twoPage></twoPage>;
  } else if (selectTab == "WelcomePage") {
    console.log("Welcome Page is running");
    return <Welcome setTab={setTab}></Welcome>;
  }
  
};
let val;
let check = false;
// function for win game;
const onClickNum = (e) => {
  console.log("the value was clicked by onClickNum,....");
  console.log(e);
  val = e;
  check = true;
};
// let chooseRandomNumber;

const winner = (chooseRandomNumberBy) => {
  console.log("random....")
  console.log(chooseRandomNumberBy)
  if (check == true) {
    if (val == chooseRandomNumberBy) {
   
      console.log("val==dice Number")
      console.log("so you are winner..")
    }else{
      
      console.log("the val is not matched to dice number ")
      console.log("so you loose the game..")
    }
  }else{
    console.log("you did not select any number please select it..");
  }
  // check = false;
};

function App() {
  let chooseNum = useRef();
  let [selectTab, setTab] = useState("WelcomePage");
  
  return (
    <>
      <div className={style.box}>
        
        {conditon(selectTab, setTab, onClickNum, winner,val)}
        
      </div>
    </>
  );
}

export default App;

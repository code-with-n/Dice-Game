import Rules from "./rules";
import style from "./start.module.css";
const Start = ({ toggleStart, rulesClicked,isRulePage }) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.dicePage}>
          <div className={style.diceImg}> <img src="./image/dices1.png" alt="" /></div>
          <div className={style.diceOptions}>
            {/* <div className={style.buttonOrGame}> */}

            
            <h1>Dice Game</h1>
            <button onClick={toggleStart}>Play Now</button>
            <button onClick={rulesClicked} > {isRulePage ? "Hide" : "Show"} Rule</button>
            {isRulePage && <Rules></Rules>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;

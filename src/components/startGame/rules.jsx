import style from "./rules.module.css"
const Rules = () => {
  return (
    <>
      <div className={style.container}>
        <h4>How to Play dice Game</h4>
        
        <div className={style.rules}>  
            <div className={style.rule}><span>Select any Number</span></div>
            <div className={style.rule}><span>Click on Start Button</span></div>
            <div className={style.rule}><span>If Your selected number or dice number equal then your score will be increase as dice number to dice number</span></div>
            <div className={style.rule}> <span>If both number not equal -2 will less from your score</span></div>
        </div>
      </div>
    </>
  );
};

export default Rules;

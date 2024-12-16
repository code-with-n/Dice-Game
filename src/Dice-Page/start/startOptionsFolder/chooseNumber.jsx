import style from "/Users/ns1ns/ReactProject/DiceGame/dice-game/src/Dice-Page/start/startPage.module.css";
// import style from "<div className="" />start/startPage.module.css"

const ChooseNumber = ({onClickNum}) => {
  {let choice = document.querySelectorAll(".box")
    choice.forEach((box)=>{
      box.addEventListener("click" ,()=>{
        let val = box.getAttribute("id");
        console.log(val)
      })
    })
  }

  
  return (
    <>
      <div className={style.numFlex}>
        <div className={style.numberBox}>
          <div className={style.box} onClick={()=> onClickNum(1)}>1</div>
          <div className={style.box}  onClick={()=> onClickNum(2)}>2</div>
          <div className={style.box} onClick={()=> onClickNum(3)}>3</div>
          <div className={style.box} onClick={()=> onClickNum(4)}>4</div>
          <div className={style.box} onClick={()=> onClickNum(5)}>5</div>
          <div className={style.box} onClick={()=> onClickNum(6)}>6</div>
        </div>
        <div className={style.message}>
          <span>Choose a Number</span>
        </div>
      </div>
    </>
  );
};

export default ChooseNumber;

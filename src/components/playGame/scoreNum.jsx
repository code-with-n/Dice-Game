import style from "./play.module.css";
import ScoreBox from "./scoreBox";
const ScoreNum = ({ arr, selectedNum, setSelectedNum,total,error,setError }) => {
  return (
    <>
      <div className={style.scorNum}>
        <ScoreBox total = {total}></ScoreBox>
      
        <div className={style.numBoxFull}>
          <div className={style.error}>{error}</div>
          <div className={style.numBox}>
          
            {arr.map((val, i) => (
              <div 
                key={i}
                style={{
                  width: "10%",
                  height: "70%",
                  border: "1px solid black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4%",
                  backgroundColor: val === selectedNum ? "black" : "white",
                  color: val === selectedNum ? "white" : "black",
                  margin: "2% 1%",
                }}
                onClick={()=>{
                  setSelectedNum(val);
                  setError()
                }} 
              >
                {val}
              </div>
            ))}
          </div>
          <span>Select Number</span>
        </div>
      </div>
    </>
  );
};

export default ScoreNum;

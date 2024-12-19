import style from "./play.module.css";

const ScoreBox = ({total}) => {
  return (
    <>
      <div className={style.score}>
        <div className={style.scoreBox}>{total}</div>
        <h4>Score Box</h4>
      </div>
    </>
  );
};
export default ScoreBox;

// import style from "./welcome.module.css";
import style from "./welcome.module.css";

const Welcome = ({ setTab }) => {
  const onclickButton = (e) => {
    console.log(e);
    // .........for useState ................
    setTab(e);
  };

  return (
    <>
      <div className={style.welcome}>
        <div className={style.imgbox}>{/* image will be here of dice */}</div>
        <div className="style">
          <div className={style.gameName}>
            <h4>Dice Game </h4>
          </div>
          <div className={style.gameOptions}>
            <button
              onClick={() => onclickButton("Start")}
              className={style.start}
            >
              Start
            </button>
            <button
              onClick={() => onclickButton("Rules")}
              className={style.rules}
            >
              Know Rules
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;

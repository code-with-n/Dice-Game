const Welcome = ({selectTab, setTab})=>{
    const onclickButton =(e)=>{
        console
    }
    
    return<>
        <div className="welcome">
          <div className="img-box">
            

          </div>
          <div className="start-page">
            <div className="gameName">
                <h4>Let's Play Dice Game </h4>
                <button onClick={()=>onclickButton("Start")} value={start}>Start</button>
                <button onClick={onclickButton}>Close</button>


            </div>
          </div>
          
        
        </div>
    </>
}

export default Welcome;
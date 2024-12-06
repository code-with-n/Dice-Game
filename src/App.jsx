import { useState } from "react";
import Pages from "./Dice-Page/pages"
import Welcome from "./Dice-Page/welcome-page/welcome"
function App() {
  let [selectTab, setTab] = useState("");
  const onclickButton =()=>{
    console.log("the button ..");
    
  }
  return<>

  <Welcome selectTab={selectTab} setTab={setTab}></Welcome>
  </>
}

export default App

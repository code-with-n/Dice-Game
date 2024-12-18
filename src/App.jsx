import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Start from './components/startGame/start'
import PlayGame from './components/playGame/play'
import StartContextProvider from './store/startContext/startcontext'
import { use } from 'react'

function App() {
  const [total, setTotal] = useState(0);
  const [isGameStartd , setGameStarted] = useState(false);
  const [isRulePage, setRulePage] = useState(false);

  const toggleStart = ()=>{
    console.log("toggleStarted")
    setGameStarted(true);
  }
  const rulesClicked = ()=>{
    console.log("rules is clicked...")
    setRulePage((prev)=> !prev)
  }
  return (
    <StartContextProvider>
   
    {isGameStartd ? <PlayGame setTotal={setTotal} total={total}></PlayGame> : <Start toggleStart={toggleStart} rulesClicked={rulesClicked} isRulePage={isRulePage}></Start>}
    

    </StartContextProvider>
  )
}

export default App

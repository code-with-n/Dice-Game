import { useState } from "react";
import { createContext } from "react";

export const StartContext = createContext();

const StartContextProvider = ({ children }) => {
   const [getFinalScore, setFinalScore] = useState(null)
  return (
     <StartContext.Provider value={{getFinalScore,setFinalScore}}>
        {children}
     </StartContext.Provider>
  )
};

export default StartContextProvider;
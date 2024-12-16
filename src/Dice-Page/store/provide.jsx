import { createContext, useState } from "react";

export const ListContext = createContext({

})


export const listProvider = ({children})=>{
    const [getData , setData]  = useState();
    
    
    return<>



    <ListContext.Provider>


        <div className="children">{children}</div>
    </ListContext.Provider>
    </>
}
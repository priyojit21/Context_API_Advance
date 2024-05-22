//import createContext

import { createContext, useState } from "react";

//create and export Context
export const CounterContext = createContext();


//Create and export Provider
export const CounterProvider = ({ children }) => {
 // all logic

    const [count,setCount] = useState(0);

    const HandleIncrease = () => {
        setCount(count+1);
    }

    const HandleDecrease = () => {
        setCount(count-1);
    }

    return (
        <CounterContext.Provider value={{count,setCount,HandleIncrease,HandleDecrease}}>
            {children}
        </CounterContext.Provider>
    )
}
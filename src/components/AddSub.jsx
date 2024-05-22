import React, { useContext } from 'react'
import { CounterContext } from '../context/Counter'

function AddSub() {

    //Handling context api values in component
    
    const {HandleIncrease,HandleDecrease} = useContext(CounterContext);

  return (
    <div>
        <button style={{border:"2px solid red"}} onClick={HandleIncrease}> + </button>
        <button style={{border:"2px solid green"}} onClick={HandleDecrease}> - </button>
    </div>
  )
}

export default AddSub

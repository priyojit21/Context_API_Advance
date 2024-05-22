import { useContext } from 'react'
import './App.css'
import { CounterContext } from './context/Counter'
import AddSub from './components/AddSub';
function App() {


  //Counter App using Context API

  const {count,HandleIncrease,HandleDecrease} = useContext(CounterContext);
  return (
    <>
      <h1>Counter App by Context Api</h1>

      <h3>Count is {count}</h3>
      <button onClick={HandleIncrease}>+</button>
      <button onClick={HandleDecrease}>-</button>
      <AddSub/>
    </>
  )
}

export default App

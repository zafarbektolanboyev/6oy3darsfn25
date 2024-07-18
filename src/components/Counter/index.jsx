import {useState} from 'react';
import '../Counter/index.css'

export default function Counter() {
    const [counterState, setCounterState] = useState(0);
    function handleIncrement (){
     setCounterState(counterState + 1)
    }
    function handleDecrement (){
     setCounterState(counterState -1)
    }
  return (
     <div className='btns'>
        <button onClick={handleIncrement}>increment</button>
         <h1 className='counter'>{counterState}</h1>
         <button onClick={handleDecrement} disabled={counterState === 0}>decrement</button>
     </div>
  )
}

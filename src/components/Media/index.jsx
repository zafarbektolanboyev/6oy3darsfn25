import React, {useState} from 'react'
import './index.css';

function Media() {
    const [counterState, setCounterState] = useState(0);
    function like (){
     setCounterState(counterState + 1)
    }
    function dislike (){
     setCounterState(counterState -1)
    }
  return (
     <div className='media'>
       <h5 onClick={like}>❤️</h5>
            <span className='counter'>{counterState}</span>
            {counterState !== 0 && <h5 onClick={dislike}>❤️</h5>}
     </div>
  )

}
export default Media

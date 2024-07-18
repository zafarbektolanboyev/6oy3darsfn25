import React from 'react'
import './index.css'

function ProgresBarr() {
  return (
    <div className='Bars'>
      <button>+</button>
      <div className='Bar'>
        <span className='bar-span'></span>
      </div>
      <button>-</button>
    </div>
  )
}

export default ProgresBarr

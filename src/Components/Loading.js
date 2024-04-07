import React from 'react'
import './Loading.css'

function Loading() {
  return (
    <div className='Loading'>
      <div className="container1">
        <div className="text-container left">RP</div>
        <div className="text-container right">SS</div>
        <div className="ball-big">
          <div className="plane"></div>
          <div className="plane" ></div>
          <div className="plane" ></div>
          <div className="plane" ></div>
          <div className="plane" ></div>
          <div className="plane" ></div>
        </div>
      </div>
    </div>
  )
}

export default Loading;
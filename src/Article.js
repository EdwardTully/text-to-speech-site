import React from 'react'

import pHistory from './pachinko'


function Article() {

    const text = pHistory
    const synth = window.speechSynthesis
    const voices = synth.getVoices()
    const sound = voices[2]

    const handleClick=()=>{
        
        const value = new SpeechSynthesisUtterance(text)
        value.rate = 0.8
        value.pitch= 1
        value.voice = sound
        synth.speak(value)
    }
    const handlePause=()=>{
      synth.pause()
    }
    const handleResume=()=>{
      synth.resume()
    }
    const handleStop=()=>(
      synth.cancel()
    )

  return (
    <div>
        <h1>Pachinko Machine History</h1>
        <div class='Atext'>{text}</div>
        <button onClick = {handleClick}>Play</button>
        <button onClick = {handlePause}>Pause</button>
        <button onClick = {handleResume}>Resume</button>
        <button onClick = {handleStop}>Stop</button>
    </div>
  )
}

export default Article
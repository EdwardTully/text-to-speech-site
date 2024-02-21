import React from 'react'

import lantern from './coleman'


function ArticleOne(props) {

    const text = lantern
    const synth = window.speechSynthesis
    const voices = synth.getVoices()
    const sound = voices[props.voice]
    
    const handleClick=()=>{
      
        const value = new SpeechSynthesisUtterance(text)
        value.rate = 1
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
        <h1>The Coleman Lantern</h1>
        <div class='Atext'>{text}</div>
        <button onClick = {handleClick}>Play</button>
        <button onClick = {handlePause}>Pause</button>
        <button onClick = {handleResume}>Resume</button>
        <button onClick = {handleStop}>Stop</button>
    </div>
  )
}

export default ArticleOne
import React from 'react'

function Article() {
    const text = "Hello world, can you hear me?"
    const handleClick=()=>{
        
        const value = new SpeechSynthesisUtterance(text)
        window.speechSynthesis.speak(value)
    }
  return (
    <div>
        <h1>Title of Section</h1>
        <div class='Atext'>{text}</div>
        <button onClick = {handleClick}>Play</button>
    </div>
  )
}

export default Article
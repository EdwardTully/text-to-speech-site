import React, { useState } from "react";
import { useEffect } from 'react';
import Article from "./Article";
import ArticleOne from "./ArticleOne";
import "./App.css";

function App() {
  const synth = window.speechSynthesis;
  const [voice, setVoice] = useState("");
  const [voiceArry, setVoiceArry] = useState([])
  
  const pullvoices= ()=>{
   let voices = synth.getVoices();
   let voiceFilt = voices.filter((ea)=>ea.localService !== false)
    setVoiceArry(voiceFilt)
  }
   
  //eslint-disable-next-line
  useEffect(()=>{pullvoices()},[])
  console.log(voiceArry);

  return (
    <div className="App">
    
    <h1>Readback Voice</h1>
      <select
        id="selVoice"
        name="selVoice"
        onChange={(event) => setVoice(event.target.value)}
      >
        {voiceArry.map((ea, index) => (
          <option value={index}>{`${ea.voiceURI} ${index}`}</option>
        ))}
      </select>
      <Article voice={voice} />
      <ArticleOne voice={voice} />


    </div>
  );
}

export default App;

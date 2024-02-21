import React, {useState} from 'react'
import { useEffect } from 'react';
import Article from './Article';
import ArticleOne from './ArticleOne';
import './App.css';

function App() {
  const synth = window.speechSynthesis
  const voices = []
  const pullVoices=()=>{
   const voices = synth.getVoices()
    return voices
  }
  
  useEffect(()=>pullVoices)
  const[voice, setVoice]= useState('')

 

  return (
    <div className="App">
      <select id='selVoice' name='selVoice'onChange={(event)=>setVoice(event.target.value)}  >
        {voices.map((ea,index)=> (
          <option  value={index}>{`${ea.voiceURI} ${index}`}</option>
        ))}
      </select>
      <Article voice = {voice}/>
      <ArticleOne voice = {voice}/>
    </div>
    
  );
  
}

export default App;

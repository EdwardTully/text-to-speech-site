
import Article from './Article';
import ArticleOne from './ArticleOne';
import './App.css';

function App() {
  const synth = window.speechSynthesis
  const voices = synth.getVoices()
 
  const eventHandler=()=>{
    console.log('hell yeah')
  }

  return (
    <div className="App">
      <select id='selVoice' name='selVoice' >
        {voices.map((ea)=> (
          <option>{`${ea.voiceURI}${ea.id}`}</option>
        ))}
      </select>
      <Article />
      <ArticleOne />
    </div>
  );
}

export default App;

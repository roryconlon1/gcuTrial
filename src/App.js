import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react';

function App() {

  const [words, setWords] = useState([]);
  const [searchWord, setSearchWord] = useState([]);

  // useEffect(() => {
  //   getWords()
  // }, [])

  const getWords = () => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchWord)
    .then(res => res.json())
    .then(data => setWords(data))
  }

  const helloWord = words.map((hello) => {
    return <div><p>{hello.word}</p>
    <p>{hello.meanings[0].definitions[0].definition}</p>
    </div>
  })

  const handleChange = (event) => {
      setSearchWord(event.target.value)
  }


  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={getWords}>Search</button>
      {helloWord}
    </div>
  );
}

export default App;

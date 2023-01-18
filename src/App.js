import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useState } from 'react';

function App() {

  const [words, setWords] = useState([]);

  useEffect(() => {
    getWords()
  }, [])

  const getWords = () => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
    .then(res => res.json())
    .then(data => setWords(data))
  }

  const helloWord = words.map((hello) => {
    return <div>{hello.word}</div>
  })


  return (
    <div className="App">
      <input type="text"/>
      {helloWord}
    </div>
  );
}

export default App;

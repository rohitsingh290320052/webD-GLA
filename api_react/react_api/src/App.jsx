import { useState } from 'react';

function App() {
  const [res, setRes] = useState(0);
  const [joke, setJoke] = useState("");
  const [movies, setMOvie] = useState([]);
  const [stat, setstat] = useState('')

  function increment() {
    setRes(res + 1);
  }

  function decrement() { 
    setRes(res - 1);
  }

  function change(e){
    setstat(e.target.value)
    console.log(stat);
  

  }
  
  async function submitInput() {
    const response = await fetch()
    const data = await response.json()
    setMOvie(data);
    
  }

  async function getJoke() {
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any");
      const data = await response.json();
      if (data.type === "single") {
        setJoke(data.joke);
      } else {
        setJoke(`${data.setup} ... ${data.delivery}`);
      }
    } catch (error) {
      console.log("error");
      setJoke("Oops! Couldn't fetch a joke at the moment.");
    }
  }

  return (
    <>
      <h1>I am learning React</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={getJoke}>I will make you laugh</button>
      <h2>Count: {res}</h2>
      <h2>Joke: {joke}</h2>
    </>
  );
}

export default App;

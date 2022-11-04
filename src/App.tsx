import React from 'react';
import './App.css';
// button version
import { useRef } from 'react';

function App() {
  const countRef = useRef(0);
  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);

  };
  console.log("I rendered!");
  return (
    <div className="App">
      <h1>console log click times</h1>
      <button onClick={handle}>Click me</button>
    </div>
  );
}

export default App;
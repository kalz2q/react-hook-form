import React from 'react';
import './App.css';
// useRef
import { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current !== null) {
      console.log(inputRef.current.focus());
    }

  }, []);



  return (
    <div>
      <input ref={inputRef}
        type="text"></input>
    </div >
  );
}

export default App;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './App.css';

// ReactDOM.render(<App />, document.getElementById('root'));



//counter.jsx


import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
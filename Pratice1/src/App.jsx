import { useState } from 'react'
import './App.css'

const simpleComponent=()=>{
  const handleClick=()=>{
    const message=document.getElementById('message');
    message.textContent='Hello, React!';
  };
  return(  
      <div>
      <h1>React</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleClick}>Click</button>
      <p id="message"></p>
    </div>
  );
};

export default simpleComponent;

// function App() {
//   return (
//     <div>
//       <h1>React</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   )
// }

// export default App

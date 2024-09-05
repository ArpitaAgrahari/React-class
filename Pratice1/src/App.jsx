import { useState } from 'react'
import './App.css'

// const simpleComponent=()=>{
//   const handleClick=()=>{
//     const message=document.getElementById('message');
//     message.textContent='Hello, React!';
//   };
//   return(  
//       <div>
//       <h1>React</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={handleClick}>Click</button>
//       <p id="message"></p>
//     </div>
//   );
// };


// export default simpleComponent;

// function App() {
//   return (
//     <div>
//       <h1>React</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   )
// }

// export default App


function JsxComponent(){
  return(
    //rule 1 :: enclose html in div tag (mandatory) 
    <div>
          <h1>Hello react!!</h1>
          <p>Start editing to see some magic happen!</p>
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Freact-jsx-in-depth%2F&psig=AOvVaw3"></img>
          {/* //rule 2 :: close every tag (mandatory)
                 //fragments */}
          <br></br>
          <ul>
            <li>React</li>
            <li>Hi</li>
          </ul>
          <button onClick={()=>alert('Hey dont click me!!! Understood??')}>Click</button>
    </div>
    //rule 3:: use camelCase for html attributes

  );
}

export default JsxComponent;
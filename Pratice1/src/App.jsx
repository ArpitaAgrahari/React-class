// import { useState } from 'react'
// import './App.css'

// // const simpleComponent=()=>{
// //   const handleClick=()=>{
// //     const message=document.getElementById('message');
// //     message.textContent='Hello, React!';
// //   };
// //   return(  
// //       <div>
// //       <h1>React</h1>
// //       <h2>Start editing to see some magic happen!</h2>
// //       <button onClick={handleClick}>Click</button>
// //       <p id="message"></p>
// //     </div>
// //   );
// // };


// // export default simpleComponent;

// // function App() {
// //   return (
// //     <div>
// //       <h1>React</h1>
// //       <h2>Start editing to see some magic happen!</h2>
// //     </div>
// //   )
// // }

// // export default App


// function JsxComponent(){
//   return(
//     //rule 1 :: enclose html in div tag (mandatory) 
//     <div>
//           <h1>Hello react!!</h1>
//           <p>Start editing to see some magic happen!</p>
//           <img src="https://i.pinimg.com/originals/be/a1/10/bea11075078b1a2992c78596ff40e05a.jpg"></img>
//           {/* //rule 2 :: close every tag (mandatory)
//                  //fragments */}
//           <br></br>
//           <ul>
//             <li>React</li>
//             <li>Hi</li>
//           </ul>
//           <button onClick={()=>alert('Hey dont click me!!! Understood??')}>Click</button>
//     </div>
//     //rule 3:: use camelCase for html attributes

//   );
// }

// export default JsxComponent;



import React from 'react';
const test=()=>{

  return React.createElement(
    //types of element
    //properties or object 
    //children of elem
    'div',
    null,
    '<h1>Hello react!!</h1>',
    React.createElement('h1',null,'Hello react'),
    React.createElement('p',null,'Start editing to see some magic happen!'),
  );
}
export default test;
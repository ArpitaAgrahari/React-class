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



// import React from 'react';
// const test=()=>{

//   return React.createElement(
//     //types of element
//     //properties or object 
//     //children of elem
//     'div',
//     {style:{color:'powderblue'}},
//     null,
//     'Hello react!!',
//     React.createElement('h1',null,'Hello react'),
//     React.createElement('p',null,'Start editing to see some magic happen!'),
//   );
// }
// export default test;

import './App.css';

const App=()=>{
  return(
    <div className="app">
      <header className="header">
      <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/about">About</a></li>
        <li className="nav-item"><a href="/contact">Contact</a></li>
        <li className="nav-item"><a href="/services">Services</a></li>
        <li className="nav-item"><a href="/blog">Blog</a></li>
  </ul>
</nav>
      </header>
      {/* main content */}
      <main className="main-content">
        <h1>React</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={()=>alert('Hey dont click me!!! Understood??')}>Click</button>
        <br></br>
        <br></br>
      </main>
      <footer className="footer">
        <p>&copy; 2024 React; All rights reserved </p>
      </footer>
    </div>
  )
}

export default App;
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './App.css';

// ReactDOM.render(<App />, document.getElementById('root'));





import { useState } from "react";
function App(){
    let count=0;
    function handleApp(){
            count+=1;
        console.log(count);
    }
    return (
        <div>
        <p>{count}</p>
        <button onClick={handleApp}>Add</button>
        <button>Sub</button>
        </div>
    )
}
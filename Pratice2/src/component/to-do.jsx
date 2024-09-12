//crate a to do lsit 
// add the task, delete the task, edit the task, mark the task as  done by usestate

import React, { Component } from 'react';
import './to-do.css';


function Task(props) {
    return (
        <div className="task">
        <span>{props.text}</span>
        <button onClick={props.onDelete}>Delete</button>
        <button onClick={props.onEdit}>Edit</button>
        <button onClick={props.onDone}>Done</button>
        </div>
    );
}
export default Task;



import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {

    let tasks1: Array<TaskType> = [
        {id:1, title:"HTML&CSS", isDone: true},
        {id:2, title:"JS", isDone: true},
        {id:3, title:"ReactJS", isDone: false}
    ]

    let tasks2: Array<TaskType> = [
        {id:1, title:"Hello, world", isDone: true},
        {id:2, title:"I am Happy", isDone: false},
        {id:3, title:"Yo", isDone: true}
    ]



    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
        </div>
    );
}

export default App;
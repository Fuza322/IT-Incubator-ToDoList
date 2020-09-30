import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilerValuesType = 'all' | 'completed' | 'active'

function App() {
    let [initTasks, setTasks] = useState <Array<TaskType>> (
        [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: false},
        {id: v1(), title: 'ReactJS', isDone: true},
        {id: v1(), title: 'TypeScript', isDone: true},
        {id: v1(), title: 'CodeWars', isDone: false}
        ]
)

    let [filerTasks, setFilterTasks] = useState <FilerValuesType> ('all')

    let tasksForToDoList = initTasks
    if (filerTasks == "completed") {
        tasksForToDoList = initTasks.filter(t => t.isDone == true)
    }
    if (filerTasks == "active") {
        tasksForToDoList = initTasks.filter(t => t.isDone == false)
    }

    function removeTask(id: string) {
        initTasks = initTasks.filter((t) => t.id !== id)
        setTasks(initTasks)
    }

    function addTask(title: string) {
        let newTask = { id: v1(), title: title, isDone: false }
        let newTasks = [newTask, ...initTasks]
        setTasks(newTasks);
    }

    function changeFilter(value: FilerValuesType) {
        setFilterTasks(value)
    }

    return (
        <div className='App'>
            <Todolist
                title='What to learn:'
                tasks={tasksForToDoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
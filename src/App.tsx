import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export type FilerValuesType = 'all' | 'completed' | 'active'

function App() {
    let [initTasks, setTasks] = useState <Array<TaskType>> (
        [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: false},
        {id: 3, title: 'ReactJS', isDone: true},
        {id: 4, title: 'TypeScript', isDone: true},
        {id: 5, title: 'CodeWars', isDone: false}
        ]
    )

    let [filerTasks, setFilterTasks] = useState <FilerValuesType> ('all')

    if (filerTasks == "completed") {
        initTasks = initTasks.filter(t => t.isDone == true)
    }
    if (filerTasks == "active") {
        initTasks = initTasks.filter(t => t.isDone == false)
    }

    function removeTask(id: number) {
        initTasks = initTasks.filter((t) => t.id !== id)
        setTasks(initTasks)
    }

    function changeFilter(value: FilerValuesType) {
        setFilterTasks(value)
    }

    return (
        <div className='App'>
            <Todolist
                title='What to learn'
                tasks={initTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
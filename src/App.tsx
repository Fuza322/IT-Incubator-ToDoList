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
    let [filter, setFilter] = useState <FilerValuesType> ('all')

    function taskFilter() {
        let tasksForToDoList = initTasks
        if (filter === "completed") {
            tasksForToDoList = initTasks.filter(t => t.isDone)
        }
        if (filter === "active") {
            tasksForToDoList = initTasks.filter(t => !t.isDone)
        }
        return tasksForToDoList
    }

    function removeTask(id: string) {
        let filteredTasks = initTasks.filter((t) => t.id !== id)
        setTasks(filteredTasks)
    }

    function addTask(title: string) {
        let newTask = { id: v1(), title: title, isDone: false }
        setTasks([newTask, ...initTasks])
    }

    function changeFilter(value: FilerValuesType) {
        setFilter(value)
    }

    function changeStatus (taskID: string, isDone: boolean) {
        let task = initTasks.find( t => t.id === taskID )
        if (task) {
            task.isDone = isDone
            setTasks([...initTasks])
        }

    }

    return (
        <div className='App'>
            <Todolist
                title='What to learn:'
                tasks={taskFilter()}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={filter}
            />
        </div>
    );
}

export default App;
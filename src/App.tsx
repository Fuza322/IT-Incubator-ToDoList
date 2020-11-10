import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type ToDoListType = {
    id: string
    title: string
    filter: FilerValuesType
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TaskStateType = {
    [key: string]: Array<TaskType>
}

export type FilerValuesType = 'all' | 'completed' | 'active'

function App() {

    const toDoListId1 = v1()
    const toDoListId2 = v1()

    const [toDoLists, setTodoLists] = useState<Array<ToDoListType>>([
        {id: toDoListId1, title: 'What to learn', filter: 'all'},
        {id: toDoListId2, title: 'What to buy', filter: 'all'}
    ])

    const [tasks, setTasks] = useState<TaskStateType>({
        [toDoListId1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: false},
            {id: v1(), title: 'ReactJS', isDone: true},
            {id: v1(), title: 'TypeScript', isDone: true},
            {id: v1(), title: 'CodeWars', isDone: false}
        ],
        [toDoListId2]: [
            {id: v1(), title: 'Dog', isDone: true},
            {id: v1(), title: 'Cat', isDone: false},
            {id: v1(), title: 'Horse', isDone: true},
            {id: v1(), title: 'Rabbit', isDone: true}
        ]
    })

    /*const [initTasks, setTasks] = useState <Array<TaskType>> (
        [
        {id: v1(), title: 'Dog', isDone: true},
        {id: v1(), title: 'Cat', isDone: false},
        {id: v1(), title: 'Horse', isDone: true},
        {id: v1(), title: 'Rabbit', isDone: true},
        ]
)
    const [filter, setFilter] = useState <FilerValuesType> ('all')*/

    /*function taskFilter() {
        let tasksForToDoList = tasks
        if (filter === 'completed') {
            tasksForToDoList = tasks.filter(t => t.isDone)
        }
        if (filter === 'active') {
            tasksForToDoList = tasks.filter(t => !t.isDone)
        }
        return tasksForToDoList
    }*/

    function addTask(title: string, toDoListId: string) {
        const toDoListTasks = tasks[toDoListId]
        let newTask = {id: v1(), title: title, isDone: false}
        tasks[toDoListId] = [newTask, ...toDoListTasks]
        setTasks({...tasks})
    }

    function removeTask(id: string, toDoListID: string) {
        const toDoListTasks = tasks[toDoListID]
        tasks[toDoListID] = toDoListTasks.filter((t) => t.id !== id)
        setTasks({...tasks})
    }

    function changeFilter(newFilterValue: FilerValuesType, toDoListId: string) {
        const toDoList = toDoLists.find(t => t.id === toDoListId)
        if (toDoList) {
            toDoList.filter = newFilterValue
            setTodoLists([...toDoLists])
        }
    }

    function changeStatus(taskID: string, isDone: boolean, ToDoListId: string) {
        const toDoListTasks = tasks[ToDoListId]
        const task = toDoListTasks.find(t => t.id === taskID)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks})
        }
    }

    function removeToDoList(toDoListId: string) {
        const filteredToDoLists = toDoLists.filter(t => t.id !== toDoListId)
        setTodoLists(filteredToDoLists)
        delete tasks[toDoListId]
        setTasks({...tasks})
    }

    return (
        <div className='App'>
            {
                toDoLists.map(t => {
                    let tasksForToDoList = tasks[t.id]
                    if (t.filter === 'active') {
                        tasksForToDoList = tasks[t.id].filter(t => !t.isDone)
                    }
                    if (t.filter === 'completed') {
                        tasksForToDoList = tasks[t.id].filter(t => t.isDone)
                    }
                    return (
                        <Todolist
                            key={t.id}
                            id={t.id}
                            title={t.title}
                            tasks={tasksForToDoList}
                            addTask={addTask}
                            removeTask={removeTask}
                            filter={t.filter}
                            changeFilter={changeFilter}
                            changeTaskStatus={changeStatus}
                            removeToDoList={removeToDoList}
                        />
                    )
                })
            }

        </div>
    );
}

export default App;
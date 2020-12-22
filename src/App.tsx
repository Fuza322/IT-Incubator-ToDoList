import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {AddItemForm} from './AddItemForm';
import {v1} from 'uuid';
import {Button, Typography, IconButton, AppBar, Toolbar, Container, Grid, Paper} from "@material-ui/core";
import {Menu} from '@material-ui/icons';


export type TodolistType = {
    id: string
    title: string
    filter: FilerValuesType
}

export type TaskStateType = {
    [key: string]: Array<TaskType>
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilerValuesType = 'all' | 'completed' | 'active'

function App() {

    const todolistID1 = v1()
    const todolistID2 = v1()

    const [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'}
    ])

    const [tasks, setTasks] = useState<TaskStateType>({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: false},
            {id: v1(), title: 'ReactJS', isDone: true},
            {id: v1(), title: 'TypeScript', isDone: true},
            {id: v1(), title: 'CodeWars', isDone: false}
        ],
        [todolistID2]: [
            {id: v1(), title: 'Dog', isDone: true},
            {id: v1(), title: 'Cat', isDone: false},
            {id: v1(), title: 'Horse', isDone: true},
            {id: v1(), title: 'Rabbit', isDone: true},
        ]
    })

    function addTask(title: string, todolistID: string) {
        const todolistTasks = tasks[todolistID]
        let newTask = {id: v1(), title: title, isDone: false}
        tasks[todolistID] = [newTask, ...todolistTasks]
        setTasks({...tasks})
    }

    function removeTask(taskID: string, todolistID: string) {
        const todolistTasks = tasks[todolistID]
        tasks[todolistID] = todolistTasks.filter((tl) => tl.id !== taskID)
        setTasks({...tasks})
    }

    function changeTodolistFilter(newFilterValue: FilerValuesType, todolistID: string) {
        const todolist = todolists.find(tl => tl.id === todolistID)
        if (todolist) {
            todolist.filter = newFilterValue
            setTodolists([...todolists])
        }
    }

    function changeTodolistTitle(title: string, todolistID: string) {
        const todolist = todolists.find(tl => tl.id === todolistID)
        if (todolist) {
            todolist.title = title
            setTodolists([...todolists])
        }
    }

    function changeTaskStatus(taskID: string, isDone: boolean, todolistID: string) {
        const todolistTasks = tasks[todolistID]
        const task = todolistTasks.find(tl => tl.id === taskID)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks})
        }
    }

    function changeTaskTitle(taskID: string, title: string, todolistID: string) {
        const todolistTasks = tasks[todolistID]
        const task = todolistTasks.find(tl => tl.id === taskID)
        if (task) {
            task.title = title
            setTasks({...tasks})
        }
    }

    function removeTodolist(todolistID: string) {
        const filteredTodolists = todolists.filter(tl => tl.id !== todolistID)
        setTodolists(filteredTodolists)
        delete tasks[todolistID]
        setTasks({...tasks})
    }

    function addTodolist(title: string) {
        const newTodolistID = v1()
        const newTodolist: TodolistType = {
            id: newTodolistID,
            title: title,
            filter: 'all'
        }
        setTodolists([...todolists, newTodolist])
        setTasks({...tasks, [newTodolistID]: []})
    }

    return (
        <div className='App'>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed={true}>
                <Grid container={true} style={{padding: '15px'}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container={true} spacing={5}>
                {
                    todolists.map(tl => {
                        let tasksForTodolist = tasks[tl.id]
                        if (tl.filter === 'active') {
                            tasksForTodolist = tasks[tl.id].filter(t => !t.isDone)
                        }
                        if (tl.filter === 'completed') {
                            tasksForTodolist = tasks[tl.id].filter(t => t.isDone)
                        }
                        return (
                            <Grid item={true}>
                                <Paper elevation={10} style={{padding: '15px', borderRadius: '15px'}}>
                            <Todolist
                                key={tl.id}
                                id={tl.id}
                                title={tl.title}
                                tasks={tasksForTodolist}
                                addTask={addTask}
                                removeTask={removeTask}
                                filter={tl.filter}
                                changeFilter={changeTodolistFilter}
                                changeTaskStatus={changeTaskStatus}
                                removeTodolist={removeTodolist}
                                changeTaskTitle={changeTaskTitle}
                                changeTodolistTitle={changeTodolistTitle}
                            />
                                </Paper>
                            </Grid>
                        )
                    })
                }
                </Grid>
            </Container>
        </div>
    );
}

export default App;
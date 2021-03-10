import React, {useReducer} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {AddItemForm} from './AddItemForm';
import {v1} from 'uuid';
import {Button, Typography, IconButton, AppBar, Toolbar, Container, Grid, Paper} from "@material-ui/core";
import {Menu} from '@material-ui/icons';
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistsReducer
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./state/tasks-reducer";


export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'completed' | 'active'

export function AppWithReducers() {

    const todolistID1 = v1()
    const todolistID2 = v1()

    const [todolists, dispatchToTodolists] = useReducer(todolistsReducer, [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'}
    ])

    const [tasks, dispatchToTasks] = useReducer(tasksReducer, {
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

    function removeTask(taskID: string, todolistID: string) {
        dispatchToTasks(removeTaskAC(taskID, todolistID))
    }

    function addTask(title: string, todolistID: string) {
        dispatchToTasks(addTaskAC(title, todolistID))
    }

    function changeTaskStatus(taskID: string, isDone: boolean, todolistID: string) {
        dispatchToTasks(changeTaskStatusAC(taskID, isDone, todolistID))
    }

    function changeTaskTitle(taskID: string, title: string, todolistID: string) {
        dispatchToTasks(changeTaskTitleAC(taskID, title, todolistID))
    }

    function changeTodolistFilter(todolistID: string, newFilterValue: FilterValuesType) {
        dispatchToTodolists(changeTodolistFilterAC(todolistID, newFilterValue))
    }

    function removeTodolist(todolistID: string) {
        const action = removeTodolistAC(todolistID)
        dispatchToTodolists(action)
        dispatchToTasks(action)
    }

    function changeTodolistTitle(todolistID: string, title: string) {
        dispatchToTodolists(changeTodolistTitleAC(todolistID, title))
    }

    function addTodolist(title: string) {
        const action = addTodolistAC(title)
        dispatchToTodolists(action)
        dispatchToTasks(action)
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
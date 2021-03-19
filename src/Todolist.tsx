import React, {useCallback} from 'react';
import {FilterValuesType, TaskType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {Button, ButtonGroup, IconButton} from "@material-ui/core";
import {Delete} from '@material-ui/icons';
import {Task} from "./Task";

export type TodolistPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    addTask: (title: string, todolistID: string) => void
    filter: FilterValuesType
    changeFilter: (todolistID: string, newFilterValue: FilterValuesType) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todolistID: string) => void
    changeTaskTitle: (taskID: string, title: string, todolistID: string) => void
    removeTask: (taskID: string, todolistID: string) => void
    removeTodolist: (todolistID: string) => void
    changeTodolistTitle: (todolistID: string, title: string) => void
}

export const Todolist = React.memo((props: TodolistPropsType) => {

    console.log('TodoList is called')

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id)
    }, [props.addTask, props.id])

    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }

    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(props.id, title)
    }, [props.changeTodolistTitle, props.id])

    const onAllClickHandler = useCallback(() => {
        props.changeFilter(props.id, 'all')
    }, [props.changeFilter, props.id])

    const onActiveClickHandler = useCallback(() => {
        props.changeFilter(props.id, 'active')
    }, [props.changeFilter, props.id])

    const onCompletedClickHandler = useCallback(() => {
        props.changeFilter(props.id, 'completed')
    }, [props.changeFilter, props.id])

    let tasksForTodolist = props.tasks
    if (props.filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => !t.isDone)
    }
    if (props.filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.isDone)
    }

    return (
        <div className='App'>
            <div>
                <h3>
                    <EditableSpan title={props.title} onChagneValue={changeTodolistTitle}/>
                    <IconButton onClick={removeTodolist}>
                        <Delete/>
                    </IconButton>
                </h3>
                <AddItemForm addItem={addTask}/>
                <ul style={{listStyle: 'none', padding: '0'}}>
                    {tasksForTodolist.map(t => {
                        return (
                            <Task
                                key={t.id}
                                todolistId={props.id}
                                task={t}
                                removeTask={props.removeTask}
                                changeTaskStatus={props.changeTaskStatus}
                                changeTaskTitle={props.changeTaskTitle}
                            />
                        )
                    })}
                </ul>
                <div style={{textAlign: 'center'}}>
                    <ButtonGroup size={'small'} color={'primary'}>
                        <Button
                            variant={props.filter === 'all' ? 'contained' : 'outlined'}
                            onClick={onAllClickHandler}
                        >All</Button>
                        <Button
                            variant={props.filter === 'active' ? 'contained' : 'outlined'}
                            onClick={onActiveClickHandler}
                        >Active</Button>
                        <Button
                            variant={props.filter === 'completed' ? 'contained' : 'outlined'}
                            onClick={onCompletedClickHandler}
                        >Completed</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
})


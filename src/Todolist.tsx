import React, {ChangeEvent} from 'react';
import {FilterValuesType, TaskType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {IconButton, Button, ButtonGroup, Checkbox} from "@material-ui/core";
import {Delete} from '@material-ui/icons';

export type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    addTask: (title: string, todolistID: string) => void
    removeTask: (taskID: string, todolistID: string) => void
    filter: 'all' | 'active' | 'completed'
    changeFilter: (todolistID: string, newFilterValue: FilterValuesType) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todolistID: string) => void
    removeTodolist: (todolistID: string) => void
    changeTaskTitle: (taskID: string, title: string, todolistID: string) => void
    changeTodolistTitle: (todolistID: string, title: string) => void
}

export function Todolist(props: PropsType) {

    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }

    const changeTodolistTitle = (title: string) => {
        props.changeTodolistTitle(props.id, title)
    }

    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }

    const onAllClickHandler = () => {
        props.changeFilter(props.id, 'all')
    }
    const onActiveClickHandler = () => {
        props.changeFilter(props.id, 'active')
    }
    const onCompletedClickHandler = () => {
        props.changeFilter(props.id, 'completed')
    }

    const tasks = props.tasks.map(t => {
        const onRemoveHandler = () => {
            props.removeTask(t.id, props.id)
        }
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)
        }
        const changeTaskTitle = (newValue: string) => {
            props.changeTaskTitle(t.id, newValue, props.id)
        }
        return (
            <li className={t.isDone ? 'is-done' : ''} key={t.id}>
                <Checkbox
                    color={'primary'}
                    onChange={onChangeHandler}
                    checked={t.isDone}
                />
                <EditableSpan
                    title={t.title}
                    changeValue={changeTaskTitle}/>
                <IconButton
                    onClick={onRemoveHandler}
                >
                    <Delete/>
                </IconButton>
            </li>
        )
    })

    return (
        <div className='App'>
            <div>
                <h3>
                    <EditableSpan
                        title={props.title}
                        changeValue={changeTodolistTitle}
                    />
                    <IconButton
                        onClick={removeTodolist}
                    >
                        <Delete/>
                    </IconButton>
                </h3>
                <AddItemForm
                    addItem={addTask}
                />
                <ul style={{listStyle: 'none', padding: '0'}}>
                    {tasks}
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
}
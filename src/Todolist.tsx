import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilerValuesType, TaskType} from './App';

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (value: FilerValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    const [newTaskTitle, SetNewTaskTitle] = useState('')

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        SetNewTaskTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(newTaskTitle)
            SetNewTaskTitle('')
        }
    }

    const addTaskHandler = () => {
            props.addTask(newTaskTitle)
            SetNewTaskTitle('')
        }

    const onAllClickHandler = () => { props.changeFilter('all') }
    const onActiveClickHandler = () => { {props.changeFilter('active')} }
    const onCompletedClickHandler = () => {props.changeFilter('completed')}

    return (
        <div className='App'>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={ newTaskTitle }
                       onChange={onNewTitleChangeHandler}
                       onKeyPress={onKeyPressHandler}
                    />
                    <button onClick={addTaskHandler}>+</button>
                </div>
                <ul>
                    {
                        props.tasks.map(t => {
                            const onRemoveHandler = () => { props.removeTask(t.id) }
                            return (
                                <li key={t.id}>
                                    <input type='checkbox' checked={t.isDone}/>
                                    <span>{t.title}</span>
                                    <button onClick={onRemoveHandler}>x</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <button onClick={onAllClickHandler}>All</button>
                    <button onClick={onActiveClickHandler}>Active</button>
                    <button onClick={onCompletedClickHandler}>Completed</button>
                </div>
            </div>
        </div>
    );
}
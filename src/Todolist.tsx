import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilerValuesType, TaskType} from './App';

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (value: FilerValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
    filter: 'all' | 'active' | 'completed'
}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if(title.trim() !== '') {
            props.addTask(title.trim())
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === "Enter") {
            addTask()
        }
    }

    const onAllClickHandler = () => {props.changeFilter('all') }
    const onActiveClickHandler = () => {props.changeFilter('active')}
    const onCompletedClickHandler = () => {props.changeFilter('completed')}
    const tasks = props.tasks.map(t => {
        const onRemoveHandler = () => { props.removeTask(t.id) }
        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {props.changeTaskStatus(t.id, e.currentTarget.checked)}
        return (
            <li className={t.isDone ? 'is-done': ''} key={t.id}>
                <input type='checkbox' onChange={onChangeHandler} checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={onRemoveHandler}>x</button>
            </li>
        )
    })

    return (
        <div className='App'>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       className={error ? 'error': ''}
                    />
                    <button onClick={addTask}>+</button>
                    {error && <div className='error-message'>{error}</div>}
                </div>
                <ul>
                    {tasks}
                </ul>
                <div>
                    <button className={props.filter === 'all' ? 'active-filter': ''} onClick={onAllClickHandler}>All</button>
                    <button className={props.filter === 'active' ? 'active-filter': ''} onClick={onActiveClickHandler}>Active</button>
                    <button className={props.filter === 'completed' ? 'active-filter': ''} onClick={onCompletedClickHandler}>Completed</button>
                </div>
            </div>
        </div>
    );
}
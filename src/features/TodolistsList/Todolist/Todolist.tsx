import React, {useCallback, useEffect} from 'react'
import {AddItemForm} from '../../../components/AddItemForm/AddItemForm'
import {EditableSpan} from '../../../components/EditableSpan/EditableSpan'
import {ProgressBar} from "../../../components/ProgressBar/ProgressBar";
import {Button, ButtonGroup, IconButton} from '@material-ui/core'
import {Delete} from '@material-ui/icons'
import {Task} from './Task/Task'
import {TaskStatuses, TaskType} from '../../../api/todolists-api'
import {FilterValuesType, TodolistDomainType} from '../todolists-reducer'
import {useDispatch} from 'react-redux'
import {fetchTasksTC} from './Task/tasks-reducer'
import style from './Todolist.module.scss'


type TodolistPropsType = {
    todolist: TodolistDomainType
    tasks: Array<TaskType>
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    demo?: boolean
}

export const Todolist = React.memo(function ({demo = false, ...props}: TodolistPropsType) {

    const dispatch = useDispatch()

    useEffect(() => {
        if (demo) {
            return
        }
        const thunk = fetchTasksTC(props.todolist.id)
        dispatch(thunk)
    }, [])

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.todolist.id)
    }, [props.addTask, props.todolist.id])

    const removeTodolist = () => {
        props.removeTodolist(props.todolist.id)
    }
    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(props.todolist.id, title)
    }, [props.todolist.id, props.changeTodolistTitle])

    const onAllClickHandler = useCallback(() => props.changeFilter('all', props.todolist.id), [props.todolist.id, props.changeFilter])
    const onActiveClickHandler = useCallback(() => props.changeFilter('active', props.todolist.id), [props.todolist.id, props.changeFilter])
    const onCompletedClickHandler = useCallback(() => props.changeFilter('completed', props.todolist.id), [props.todolist.id, props.changeFilter])
    
    let tasksForTodolist = props.tasks

    if (props.todolist.filter === 'active') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.New)
    }
    if (props.todolist.filter === 'completed') {
        tasksForTodolist = props.tasks.filter(t => t.status === TaskStatuses.Completed)
    }

    return (
        <div>
            <h3>
                <EditableSpan value={props.todolist.title} onChange={changeTodolistTitle}/>
                <IconButton onClick={removeTodolist} disabled={props.todolist.entityStatus === 'loading'}>
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask} disabled={props.todolist.entityStatus === 'loading'}/>
            <div>
                {tasksForTodolist.map(t =>
                    <Task key={t.id} task={t} todolistId={props.todolist.id}
                          removeTask={props.removeTask}
                          changeTaskTitle={props.changeTaskTitle}
                          changeTaskStatus={props.changeTaskStatus}
                    />)
                }
            </div>
            <div style={{paddingTop: '10px'}}>
                <ButtonGroup color={'primary'}>
                    <Button variant={props.todolist.filter === 'all' ? 'contained' : 'outlined'}
                            onClick={onAllClickHandler}
                            color={'default'}
                    >All
                    </Button>
                    <Button variant={props.todolist.filter === 'active' ? 'contained' : 'outlined'}
                            onClick={onActiveClickHandler}
                            color={'primary'}>Active
                    </Button>
                    <Button variant={props.todolist.filter === 'completed' ? 'contained' : 'outlined'}
                            onClick={onCompletedClickHandler}
                            color={'secondary'}>Completed
                    </Button>
                </ButtonGroup>
                <ProgressBar tasks={props.tasks}/>
            </div>
        </div>
    )
})



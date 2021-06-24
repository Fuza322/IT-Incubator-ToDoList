import React, {useCallback, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {FilterValuesType, TodolistDomainType} from '../todolists-reducer'
import {fetchTasksTC} from './Task/tasks-reducer'
import {TaskStatuses, TaskType} from '../../../api/todolists-api'
import {Task} from './Task/Task'
import {AddItemForm} from '../../../components/AddItemForm/AddItemForm'
import {EditableSpan} from '../../../components/EditableSpan/EditableSpan'
import {ProgressBar} from './ProgressBar/ProgressBar'
import moment from 'moment'
import {Button, ButtonGroup, IconButton} from '@material-ui/core'
import {Delete} from '@material-ui/icons'
import style from './Todolist.module.scss'

type TodolistPropsType = {
    todolist: TodolistDomainType
    tasks: Array<TaskType>
    addTask: (title: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskDescription: (taskId: string, newDescription: string, todolistId: string) => void
    changeTaskDeadline: (taskId: string, newDeadline: string, todolistId: string) => void
    changeTaskPriority: (taskId: string, newPriority: number, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    demo?: boolean
}

export const Todolist = React.memo(function ({demo = false, ...props}: TodolistPropsType) {

    const dispatch = useDispatch()

    useEffect(() => {
        if (demo) {
            return
        }
        dispatch(fetchTasksTC(props.todolist.id))
    }, [demo, dispatch, props.todolist.id])

    const onAddTaskClickHandler = useCallback((title: string) => {
        props.addTask(title, props.todolist.id)
    }, [props.addTask, props.todolist.id])

    const onRemoveTodolistClickHandler = useCallback(() => {
        props.removeTodolist(props.todolist.id)
    }, [props.removeTodolist, props.todolist.id])

    const onChangeTodolistTitleClickHandler = useCallback((title: string) => {
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
        <div className={style.todolistBlock}>
            <div className={style.todolistContainer}>
                <div className={style.todolistTitleContainer}>
                    <EditableSpan
                        value={props.todolist.title}
                        onChangeValue={onChangeTodolistTitleClickHandler}
                        editableSpanInputStyle={style.todolistTitleEditableSpanInput}
                        editableSpanTextStyle={style.todolistTitle}
                    />
                    <div className={style.todolistDisplay}>
                        <span>{props.todolist.addedDate ? moment(props.todolist.addedDate).format('L') : null}</span>
                        <IconButton onClick={onRemoveTodolistClickHandler}
                                    disabled={props.todolist.entityStatus === 'loading'}
                                    className={style.todolistDeleteButton}>
                            <Delete fontSize='inherit'/>
                        </IconButton>
                    </div>
                </div>
                <AddItemForm
                    addItem={onAddTaskClickHandler}
                    disabled={props.todolist.entityStatus === 'loading'}
                    addItemInputStyle={style.todolistInput}
                />
                <div>
                    {tasksForTodolist.map(t =>
                        <Task
                            key={t.id}
                            todolistId={props.todolist.id}
                            task={t}
                            removeTask={props.removeTask}
                            changeTaskTitle={props.changeTaskTitle}
                            changeTaskStatus={props.changeTaskStatus}
                            changeTaskDescription={props.changeTaskDescription}
                            changeTaskDeadline={props.changeTaskDeadline}
                            changeTaskPriority={props.changeTaskPriority}

                        />)
                    }
                </div>
                <div className={style.todolistFilterContainer}>
                    <ButtonGroup color={'primary'}
                                 className={style.buttonGroupContainer}>
                        <Button variant={props.todolist.filter === 'all' ? 'contained' : 'outlined'}
                                onClick={onAllClickHandler}
                                color={'default'}
                                className={style.buttonFilter}>All
                        </Button>
                        <Button variant={props.todolist.filter === 'active' ? 'contained' : 'outlined'}
                                onClick={onActiveClickHandler}
                                color={'primary'}
                                className={style.buttonFilter}>Active
                        </Button>
                        <Button variant={props.todolist.filter === 'completed' ? 'contained' : 'outlined'}
                                onClick={onCompletedClickHandler}
                                color={'secondary'}
                                className={style.buttonFilter}>Completed
                        </Button>
                    </ButtonGroup>
                </div>
                <ProgressBar tasks={props.tasks}/>
            </div>
        </div>
    )
})



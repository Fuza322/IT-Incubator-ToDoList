import React, {ChangeEvent, useCallback, useState} from 'react'
import {TaskStatuses, TaskType} from '../../../../api/todolists-api'
import {TaskSettings} from './TaskSettings/TaskSettings'
import {EditableSpan} from '../../../../components/EditableSpan/EditableSpan'
import {Delete} from '@material-ui/icons'
import {Checkbox, IconButton} from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings'
import style from './Task.module.scss'

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    changeTaskDescription: (taskId: string, newDescription: string, todolistId: string) => void
    changeTaskDeadline: (taskId: string, newDeadline: string, todolistId: string) => void
    changeTaskPriority: (taskId: string, newPriority: number, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}

export const Task = React.memo((props: TaskPropsType) => {

    const [settingsButtonStatus, setSettingsButtonStatus] = useState<boolean>(false)

    const onClickSettingsButton = () => {
        setSettingsButtonStatus(!settingsButtonStatus)
    }

    const onRemoveTaskClickHandler = useCallback(() => {
        props.removeTask(props.task.id, props.todolistId)
    }, [props.task.id, props.todolistId])

    const onTaskStausChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(props.task.id, e.currentTarget.checked ? TaskStatuses.Completed : TaskStatuses.New, props.todolistId)
    }, [props.task.id, props.todolistId])

    const onTaskTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId)
    }, [props.task.id, props.todolistId])

    return (
        <div key={props.task.id} className={props.task.status === TaskStatuses.Completed ? 'is-done' : ''}>
            <div className={style.taskMainInfo}>
                <div className={style.taskStatusAndTitle}>
                    <Checkbox
                        className={style.taskCheckbox}
                        checked={props.task.status === TaskStatuses.Completed}
                        color='primary'
                        onChange={onTaskStausChangeHandler}
                    />
                    <EditableSpan
                        value={props.task.title}
                        onChangeValue={onTaskTitleChangeHandler}
                        editableSpanInputStyle={style.taskTitleEditableSpanInput}
                        editableSpanTextStyle={style.taskTitle}
                    />
                </div>
                <div className={style.taskButtonsContainer}>
                    <IconButton className={style.taskButton} onClick={onClickSettingsButton} color="primary">
                        <SettingsIcon fontSize='inherit'/>
                    </IconButton>
                    <IconButton className={style.taskButton} onClick={onRemoveTaskClickHandler}
                                disabled={props.task.entityStatus === 'loading'}>
                        <Delete fontSize='inherit'/>
                    </IconButton>
                </div>
            </div>
            {
                settingsButtonStatus
                    ? <TaskSettings
                        task={props.task}
                        todolistId={props.todolistId}
                        changeTaskDescription={props.changeTaskDescription}
                        changeTaskDeadline={props.changeTaskDeadline}
                        changeTaskPriority={props.changeTaskPriority}
                    />
                    : null
            }
        </div>
    )
})

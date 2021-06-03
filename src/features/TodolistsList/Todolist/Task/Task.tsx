import React, {ChangeEvent, useCallback, useState} from 'react'
import {TaskStatuses, TaskType} from '../../../../api/todolists-api'
import {EditableSpan} from '../../../../components/EditableSpan/EditableSpan'
import moment from 'moment'
import {Delete} from '@material-ui/icons'
import {Checkbox, IconButton} from '@material-ui/core'
import SettingsIcon from '@material-ui/icons/Settings';
import style from './Task.module.scss'

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    changeTaskDescription: (taskId: string, newDescription: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}

export const Task = React.memo((props: TaskPropsType) => {

    const [settingsButtonStatus, setSettingsButtonStatus] = useState<boolean>(false)

    const onClickSettingsButton = () => {
        const settingsButtonStatusCopy = !settingsButtonStatus
        setSettingsButtonStatus(settingsButtonStatusCopy)
        console.log(settingsButtonStatus)
    }

    const onClickHandler = useCallback(() => {
        props.removeTask(props.task.id, props.todolistId)
    }, [props.task.id, props.todolistId])

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked
        props.changeTaskStatus(props.task.id, newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New, props.todolistId)
    }, [props.task.id, props.todolistId])

    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId)
    }, [props.task.id, props.todolistId])

    const onDescriptionChangeHandler = useCallback((newValue: string) => {
        props.changeTaskDescription(props.task.id, newValue, props.todolistId)
    }, [props.task.id, props.todolistId])

    return (
        <div key={props.task.id} className={props.task.status === TaskStatuses.Completed ? 'is-done' : ''}>
            <div className={style.taskMainInfo}>
                <div className={style.taskStatusAndTitle}>
                    <Checkbox
                        className={style.taskCheckbox}
                        checked={props.task.status === TaskStatuses.Completed}
                        color='primary'
                        onChange={onChangeHandler}
                    />
                    <EditableSpan
                        value={props.task.title}
                        onChange={onTitleChangeHandler}
                        editableSpanInputStyle={style.taskTitleEditableSpanInput}
                        editableSpanTextStyle={style.taskTitle}
                    />
                </div>
                <div className={style.taskButtonsContainer}>
                    <IconButton className={style.taskButton} onClick={onClickSettingsButton} color="primary">
                        <SettingsIcon fontSize='inherit'/>
                    </IconButton>
                    <IconButton className={style.taskButton} onClick={onClickHandler}
                                disabled={props.task.entityStatus === 'loading'}>
                        <Delete fontSize='inherit'/>
                    </IconButton>
                </div>
            </div>
            {
                settingsButtonStatus
                    ? <div className={style.taskSettingsContainer}>
                        <div className={style.taskDescriptionContainer}>
                            <p className={style.taskDescriptionHelpText}>Description:</p>
                            <EditableSpan
                                value={props.task.description}
                                onChange={onDescriptionChangeHandler}
                                editableSpanInputStyle={style.taskDescriptionEditableSpanInput}
                                editableSpanTextStyle={style.taskDescriptionText}
                            />
                        </div>
                        <div className={style.taskCreatedContainer}>
                            <p className={style.taskCreatedHelpText}>Created:</p>
                            <p className={style.taskCreatedText}>{props.task.addedDate ? moment(props.task.addedDate).format('lll') : null}</p>
                        </div>
                        {/*<input style={{margin: '10px'}} type='date' id='start' name='trip-start' value='2021-05-22' min='2021-01-01'/>*/}
                    </div>
                    : null
            }
        </div>
    )
})

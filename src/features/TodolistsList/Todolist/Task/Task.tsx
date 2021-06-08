import React, {ChangeEvent, useCallback, useState} from 'react'
import {TaskStatuses, TaskType} from '../../../../api/todolists-api'
import {EditableSpan} from '../../../../components/EditableSpan/EditableSpan'
import {DataInputType} from '../../../../components/DataInput/DataInput'
import moment from 'moment'
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
    const [showPriority, setShowPriority] = useState<boolean>(true)
    const taskPriority = () => {
        switch (props.task.priority) {
            case 0: return 'Low'
            case 1: return 'Middle'
            case 2: return 'Hight'
            case 3: return 'Urgently'
            case 4: return 'Later'
        }

    }
    const createdDate = (date: string) => date.substr(3, 2) + '.' + date.substr(0, 2) + '.' + date.substr(6, 4)

    const onClickSettingsButton = () => {
        setSettingsButtonStatus(!settingsButtonStatus)
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

    const onDeadlineChangeHandler = useCallback((newValue: string) => {
        props.changeTaskDeadline(props.task.id, newValue, props.todolistId)
    }, [props.task.id, props.todolistId])

    //const onPriorityChangeHandler = useCallback((newValue: number) => {
    //    props.changeTaskPriority(props.task.id, newValue, props.todolistId)
    //}, [props.task.id, props.todolistId])

    const activateEditMode = () => {
        setShowPriority(false)
    }

    const changeSelectedItemHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        props.changeTaskPriority(props.task.id, +e.target.value, props.todolistId)
        setShowPriority(true)
    }

    console.log(props.task)

    createdDate(moment(props.task.addedDate).format('L'))

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
                        <div className={style.settingsItemContainer}>
                            <p className={style.taskItemHelpText}>Description:</p>
                            <EditableSpan
                                value={props.task.description}
                                onChange={onDescriptionChangeHandler}
                                editableSpanInputStyle={style.taskDescriptionEditableSpanInput}
                                editableSpanTextStyle={style.itemText}
                            />
                        </div>
                        <div className={style.settingsItemContainer}>
                            <span className={style.taskItemHelpText}>Deadline:</span>
                            <DataInputType
                                value={props.task.deadline.substr(0, 10)}
                                onChange={onDeadlineChangeHandler}
                            />
                        </div>
                        <div className={style.settingsItemContainer}>
                            <span className={style.taskItemHelpText}>Priority:</span>
                            {
                                showPriority
                                    ? <span onDoubleClick={activateEditMode}
                                            className={style.itemText}
                                            style={{margin: '0 0 0 12px'}}>{taskPriority()}</span>
                                    : <select className={style.taskSelect} onChange={changeSelectedItemHandler} name='priority'>
                                        <option value={0} selected>Low</option>
                                        <option value={1}>Middle</option>w
                                        <option value={2}>Hight</option>
                                        <option value={3}>Urgently</option>
                                        <option value={4}>Later</option>
                                    </select>
                            }
                        </div>
                        <div className={style.settingsItemContainer}>
                            <span className={style.taskItemHelpText} style={{margin: '0 12px 0 0'}}>Created:</span>
                            <span className={style.itemText}>{props.task.addedDate ? createdDate(moment(props.task.addedDate).format('L')) : null}</span>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
})

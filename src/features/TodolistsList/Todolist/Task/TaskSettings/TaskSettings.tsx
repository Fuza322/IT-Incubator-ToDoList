import React, {useCallback} from 'react'
import style from './TaskSettings.module.scss'
import {EditableSpan} from '../../../../../components/EditableSpan/EditableSpan'
import {DeadlineDate} from './DeadlineDate/DeadlineDate'
import {TaskType} from '../../../../../api/todolists-api'
import {PrioritySelect} from './PrioritySelect/PrioritySelect'
import {CreatedDate} from './CreatedDate/CreatedDate'

type TaskSettingsPropsType = {
    task: TaskType
    todolistId: string
    changeTaskDescription: (taskId: string, newDescription: string, todolistId: string) => void
    changeTaskDeadline: (taskId: string, newDeadline: string, todolistId: string) => void
    changeTaskPriority: (taskId: string, newPriority: number, todolistId: string) => void
}

export const TaskSettings = React.memo((props: TaskSettingsPropsType) => {

    const onTaskDescriptionChangeHandler = useCallback((newValue: string) => {
        props.changeTaskDescription(props.task.id, newValue, props.todolistId)
    }, [props.task.id, props.todolistId])

    const onTaskDeadlineChangeHandler = useCallback((newValue: string) => {
        props.changeTaskDeadline(props.task.id, newValue, props.todolistId)
    }, [props.task.id, props.todolistId])

    const onTaskPriorityChangeHandler = useCallback((newPriority: number) => {
        props.changeTaskPriority(props.task.id, newPriority, props.todolistId)
    }, [props.task.id, props.todolistId])

    return (
        <div className={style.taskSettingsContainer}>
            <div className={style.settingsItemContainer}>
                <p className={style.taskItemHelpText}>Description:</p>
                <EditableSpan
                    value={props.task.description}
                    onChangeValue={onTaskDescriptionChangeHandler}
                    editableSpanInputStyle={style.taskDescriptionEditableSpanInput}
                    editableSpanTextStyle={style.itemText}
                />
            </div>
            <div className={style.settingsItemContainer}>
                <span className={style.taskItemHelpText}>Deadline:</span>
                <DeadlineDate
                    dateValue={props.task.deadline.substr(0, 10)}
                    onDateChange={onTaskDeadlineChangeHandler}
                />
            </div>
            <div className={style.settingsItemContainer}>
                <span className={style.taskItemHelpText}>Priority:</span>
                <PrioritySelect
                    priority={props.task.priority}
                    todolistId={props.todolistId}
                    onChangePriority={onTaskPriorityChangeHandler}
                    priorityTextStyle={style.itemText}
                />
            </div>
            <div className={style.settingsItemContainer}>
                <span className={style.taskItemHelpText} style={{margin: '0 12px 0 0'}}>Created:</span>
                <CreatedDate
                    createdDate={props.task.addedDate}
                />
            </div>
        </div>
    );
})
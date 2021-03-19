import {TaskType} from "./App";
import React, {ChangeEvent, useCallback} from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";

type TaskPropsType = {
    todolistId: string
    task: TaskType
    removeTask: (taskID: string, todolistID: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean, todolistID: string) => void
    changeTaskTitle: (taskID: string, title: string, todolistID: string) => void
}
export const Task = React.memo((props: TaskPropsType) => {

    const onRemoveHandler = () => {
        props.removeTask(props.task.id, props.todolistId)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(props.task.id, e.currentTarget.checked, props.todolistId)
    }
    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId)
    }, [props.changeTaskTitle, props.task.id, props.todolistId])

    return (
        <li className={props.task.isDone ? 'is-done' : ''} key={props.task.id}>
            <Checkbox
                color={'primary'}
                onChange={onChangeHandler}
                checked={props.task.isDone}
            />
            <EditableSpan
                title={props.task.title}
                onChagneValue={onTitleChangeHandler}/>
            <IconButton
                onClick={onRemoveHandler}
            >
                <Delete/>
            </IconButton>
        </li>
    )
})
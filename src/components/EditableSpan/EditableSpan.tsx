import React, {ChangeEvent, useState} from 'react';
import {TextField} from '@material-ui/core'
import style from './EditableSpan.module.scss'

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
    editableSpanInputStyle?: any
    editableSpanTextStyle?: any
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {

    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(props.value)

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.value)
    }
    const activateViewMode = () => {
        setEditMode(false)
        props.onChange(title)
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <TextField
            className={props.editableSpanInputStyle}
            value={title} onChange={changeTitle}
            autoFocus onBlur={activateViewMode}
            color='primary'
        />
        : <span className={props.editableSpanTextStyle} onDoubleClick={activateEditMode}>{props.value}</span>
})

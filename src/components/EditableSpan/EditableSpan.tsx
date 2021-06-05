import React, {ChangeEvent, useState} from 'react'
import {TextField} from '@material-ui/core'
import style from './EditableSpan.module.scss'
import {setAppErrorAC} from '../../app/app-reducer'
import {useDispatch} from 'react-redux'

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
    editableSpanInputStyle?: string
    editableSpanTextStyle?: string
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {

    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(props.value)
    
    const dispatch = useDispatch()

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.value)
    }
    const activateViewMode = () => {
        if (title !== '') {
            setEditMode(false)
            props.onChange(title)
        } else {
            dispatch(setAppErrorAC('Сhanges not saved. Title is emply.'))
            setEditMode(false)
            props.onChange(props.value)
        }
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

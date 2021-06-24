import React, {ChangeEvent, useState} from 'react'
import {useDispatch} from 'react-redux'
import {setAppErrorAC} from '../../app/app-reducer'
import {TextField} from '@material-ui/core'

type EditableSpanPropsType = {
    value: string
    onChangeValue: (newValue: string) => void
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
            props.onChangeValue(title)
        } else {
            dispatch(setAppErrorAC('Сhanges not saved. Title is emply.'))
            setEditMode(false)
            props.onChangeValue(props.value)
        }
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <TextField
            value={title}
            onChange={changeTitle}
            onBlur={activateViewMode}
            autoFocus
            color='primary'
            className={props.editableSpanInputStyle}
        />
        : <span onDoubleClick={activateEditMode} className={props.editableSpanTextStyle}>{props.value}</span>
})

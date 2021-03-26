import React, {ChangeEvent, useState} from 'react';
import {TextField} from '@material-ui/core';

export type EditableSpanType = {
    value: string
    onChagneValue: (newValue: string) => void
}

export const EditableSpan = React.memo((props: EditableSpanType) => {

    console.log('EditableSpan is called')

    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(props.value)

    const activatedEditMode = () => {
        setEditMode(true)
    }

    const deactivatedEditMode = () => {
        setEditMode(false)
        props.onChagneValue(title)
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        editMode
            ? <TextField
                value={title}
                onBlur={deactivatedEditMode}
                autoFocus={true}
                onChange={changeTitle}
            />
            : <span onDoubleClick={activatedEditMode}>{props.value}</span>
    )
})
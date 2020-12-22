import React, {ChangeEvent, useState} from 'react';
import { TextField } from '@material-ui/core';

export type EditableSpanType = {
    title: string
    changeValue: (newValue: string) => void
}

export function EditableSpan(props: EditableSpanType) {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(props.title)

    const activatedEditMode = () => {
        setEditMode(true)
    }
    const deactivatedEditMode = () => {
        setEditMode(false)
        props.changeValue(title)
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
            : <span onDoubleClick={activatedEditMode}>{props.title}</span>
    )
}
import React, {ChangeEvent, KeyboardEvent, useState} from "react"
import {IconButton, TextField} from "@material-ui/core"
import {AddBox} from "@material-ui/icons"
import style from "./AddItemForm.module.scss"

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
    addItemInputStyle?: string
}

export const AddItemForm = React.memo(function ({addItem, disabled = false, addItemInputStyle}: AddItemFormPropsType) {

    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const addItemHandler = () => {
        if (title.trim() !== "") {
            addItem(title)
            setTitle("")
        } else {
            setError("Title is required")
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError("")
        }
        if (e.key === "Enter") {
            addItemHandler()
        }
    }

    return (
        <div className={style.addItemContainer}>
            <TextField
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                disabled={disabled}
                error={!!error}
                helperText={error}
                label="Title"
                variant="outlined"
                className={addItemInputStyle}
            />
            <IconButton onClick={addItemHandler} disabled={disabled} className={style.addItemButton} color="primary">
                <AddBox/>
            </IconButton>
        </div>
    )
})

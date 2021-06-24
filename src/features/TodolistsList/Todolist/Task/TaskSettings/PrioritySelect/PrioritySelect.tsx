import React, {ChangeEvent, useState} from 'react'
import style from './PrioritySelect.module.scss'

type PrioritySelectPropsType = {
    todolistId: string
    priority: number
    onChangePriority: (newPriority: number) => void
    priorityTextStyle?: string
}

export const PrioritySelect = React.memo((props: PrioritySelectPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(true)
    const taskPriority = () => {
        switch (props.priority) {
            case 0:
                return 'Low'
            case 1:
                return 'Middle'
            case 2:
                return 'Hight'
            case 3:
                return 'Urgently'
            case 4:
                return 'Later'
        }

    }

    const onSelectedItemChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onChangePriority(+e.target.value)
        setEditMode(true)
    }

    const activateEditModeClickHandler = () => {
        setEditMode(false)
    }

    return (
        editMode
            ? <span onDoubleClick={activateEditModeClickHandler}
                    className={props.priorityTextStyle}
                    style={{margin: '0 0 0 12px'}}>{taskPriority()}</span>
            : <select onChange={onSelectedItemChangeHandler} name='priority' className={style.taskSelect}>
                <option value={0} selected>Low</option>
                <option value={1}>Middle</option>
                <option value={2}>Hight</option>
                <option value={3}>Urgently</option>
                <option value={4}>Later</option>
            </select>
    )
})
import React from 'react'
import style from './CreatedDate.module.scss'
import moment from "moment";
import {TaskType} from "../../../../../../api/todolists-api";

type CreatedDatePropsType = {
    task: TaskType
}

export const CreatedDate = React.memo((props: CreatedDatePropsType) => {

    const createdDate = (date: string) => {
        return `${date.substr(3, 2)}.${date.substr(0, 2)}.${date.substr(6, 4)}`
    }

    return (
        <span className={style.createdDateText}>
            {props.task.addedDate
                ? createdDate(moment(props.task.addedDate).format('L'))
                : null
            }
        </span>
    )
})
import React from 'react'
import style from './CreatedDate.module.scss'
import moment from "moment";

type CreatedDatePropsType = {
    createdDate: string
}

export const CreatedDate = React.memo((props: CreatedDatePropsType) => {

    const createdDate = (date: string) => {
        return `${date.substr(3, 2)}.${date.substr(0, 2)}.${date.substr(6, 4)}`
    }

    return (
        <span className={style.createdDateText}>
            {props.createdDate
                ? createdDate(moment(props.createdDate).format('L'))
                : null
            }
        </span>
    )
})
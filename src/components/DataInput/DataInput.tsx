import React, {ChangeEvent} from 'react'
import style from './DataInput.module.scss'

type DataInputType = {
    value: string
    onChange: (newValue: string) => void
}

export const DataInputType = React.memo(function (props: DataInputType) {

    const changeDate = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }

    return (
        <>
            <input onChange={changeDate} value={props.value}
                   className={style.taskDeadlineInput}
                   type='date'/>
        </>
    )
})

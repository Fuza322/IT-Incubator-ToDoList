import React, {useCallback} from 'react'
import {TaskType} from '../../api/todolists-api'
import style from './ProgressBar.module.scss'
//@ts-ignore
import {CircleProgress} from 'react-gradient-progress'


type ProgressBarPropsType = {
    tasks: Array<TaskType>
}

export const ProgressBar = React.memo(function (props: ProgressBarPropsType) {

    const countPercentValue = useCallback((tasks: Array<TaskType>) => {
        let countCompletedTasks: number = 0
        tasks.forEach(item => {
            if (item.status === 2) {
                countCompletedTasks++
            }
        })
        return Math.round((countCompletedTasks * 100) / props.tasks.length)
    }, [props.tasks])

    return (
        isNaN(countPercentValue(props.tasks))
            ? <></>
            : <div className={style.progressContainer}>
                <span>Progress (Completed):</span>
                <CircleProgress
                    percentage={countPercentValue(props.tasks)}
                    primaryColor={['#0085eb', '#dfe5ff']}
                    secondaryColor={'#FFE5FF'}
                    strokeWidth={5}
                    width={70}
                />
            </div>
    )
});

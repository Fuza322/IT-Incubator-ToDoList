import React from "react"
import style from "./PageNotFound.module.scss"

export const PageNotFound = React.memo(() => {
    return (
        <div className={style.pageNotFoundBlock}>
            <p>Something wrong...</p>
            <p>404: PAGE NOT FOUND!</p>
        </div>
    )
})
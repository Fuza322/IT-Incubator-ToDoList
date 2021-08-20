import {Dispatch} from "redux"
import {ResponseType} from "../api/todolists-api"
import {setAppErrorAC, setAppStatusAC} from "../app/app-reducer"

export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch<ReturnType<typeof setAppErrorAC> | ReturnType<typeof setAppStatusAC>>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC("Some error occurred"))
    }
    dispatch(setAppStatusAC("failed"))
}

export const handleServerNetworkError = (error: { message: string }, dispatch: Dispatch<ReturnType<typeof setAppErrorAC> | ReturnType<typeof setAppStatusAC>>) => {
    dispatch(setAppErrorAC(error.message ? error.message : "Some error occurred"))
    dispatch(setAppStatusAC("failed"))
}

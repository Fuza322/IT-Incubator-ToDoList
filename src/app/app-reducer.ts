import {ThunkAction} from "redux-thunk"
import {authAPI} from "../api/todolists-api"
import {AppActionsType, AppRootStateType} from "./store"
import {setIsLoggedInAC} from "../features/Login/auth-reducer"
import {handleServerNetworkError} from "../utils/error-utils"

const initialState: InitialStateType = {
    status: "idle",
    error: null,
    isInitialized: false
}

export type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/SET-IS-INITIALIZED":
            return {...state, isInitialized: action.isInitialized}
        case "APP/SET-STATUS":
            return {...state, status: action.status}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

// actions
export const setAppIsInitializedAC = (isInitialized: boolean) => (
    {type: "APP/SET-IS-INITIALIZED", isInitialized} as const)

export const setAppStatusAC = (status: RequestStatusType) => (
    {type: "APP/SET-STATUS", status} as const)

export const setAppErrorAC = (error: string | null) => (
    {type: "APP/SET-ERROR", error} as const)

// thunks
export const initializeAppTC = (): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(setAppStatusAC("loading"))
            const res = await authAPI.me()
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true, res.data.data.email))
            }
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        } finally {
            dispatch(setAppIsInitializedAC(true))
            dispatch(setAppStatusAC("succeeded"))
        }
    }

// types
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"
export type AppReducerActionsType =
    ReturnType<typeof setAppIsInitializedAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppStatusAC>

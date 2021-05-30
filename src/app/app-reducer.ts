import {Dispatch} from 'redux'
import {authAPI} from '../api/todolists-api'
import {setIsLoggedInAC, setIsLoggedInActionType} from '../features/Login/auth-reducer'
import {handleServerNetworkError} from '../utils/error-utils'

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
}

export type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-IS-INITIALIZED':
            return {...state, isInitialized: action.isInitialized}
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return {...state}
    }
}

// actions
export const setAppisInitializedAC = (isInitialized: boolean) => {
    return {type: 'APP/SET-IS-INITIALIZED', isInitialized} as const
}
export const setAppStatusAC = (status: RequestStatusType) => {
    return {type: 'APP/SET-STATUS', status} as const
}
export const setAppErrorAC = (error: string | null) => {
    return {type: 'APP/SET-ERROR', error} as const
}

// thunks
export const initializeAppTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true, res.data.data.email))
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
        .finally(() => {
            dispatch(setAppisInitializedAC(true))
            dispatch(setAppStatusAC('succeeded'))
        })
}

// types
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type SetIsInitializedActionType = ReturnType<typeof setAppisInitializedAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
type ActionsType = SetAppErrorActionType | SetAppStatusActionType | SetIsInitializedActionType | setIsLoggedInActionType

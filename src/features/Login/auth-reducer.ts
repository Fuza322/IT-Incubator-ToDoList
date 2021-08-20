import {ThunkAction} from "redux-thunk"
import {authAPI, LoginParamsType} from "../../api/todolists-api"
import {AppActionsType, AppRootStateType} from "../../app/store"
import {setAppStatusAC} from "../../app/app-reducer"
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils"

const initialState = {
    isLoggedIn: false,
    email: ""
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "AUTH/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.value, email: action.email}
        default:
            return state
    }
}

// actions
export const setIsLoggedInAC = (value: boolean, email: string) => (
    {type: "AUTH/SET-IS-LOGGED-IN", value, email} as const)

// thunks
export const loginTC = (data: LoginParamsType): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(setAppStatusAC("loading"))
            const res = await authAPI.login(data)
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true, data.email))
            } else {
                handleServerAppError(res.data, dispatch);
            }
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        } finally {
            dispatch(setAppStatusAC("succeeded"))
        }
    }

export const logoutTC = (): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(setAppStatusAC("loading"))
            const res = await authAPI.logout()
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(false, ""))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        } finally {
            dispatch(setAppStatusAC("succeeded"))
        }
    }

// types
export type SetIsLoggedInActionType = ReturnType<typeof setIsLoggedInAC>
export type AuthReducerActionsType = SetIsLoggedInActionType
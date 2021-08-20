import {ThunkAction} from "redux-thunk"
import {todolistsAPI, TodolistType} from "../../api/todolists-api"
import {AppActionsType, AppRootStateType} from "../../app/store"
import {RequestStatusType, setAppStatusAC} from "../../app/app-reducer"
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils"

const initialState: Array<TodolistDomainType> = []

export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType
    entityStatus: RequestStatusType
}

export const todolistsReducer = (state: Array<TodolistDomainType> = initialState, action: AppActionsType): Array<TodolistDomainType> => {
    switch (action.type) {
        case "SET-TODOLISTS":
            return action.todolists.map(tl => ({...tl, filter: "all", entityStatus: "idle"}))
        case "ADD-TODOLIST":
            return [{...action.todolist, filter: "all", entityStatus: "idle"}, ...state]
        case "REMOVE-TODOLIST":
            return state.filter(tl => tl.id !== action.id)
        case "CHANGE-TODOLIST-TITLE":
            return state.map(tl => tl.id === action.id ? {...tl, title: action.title, entityStatus: "idle"} : tl)
        case "CHANGE-TODOLIST-FILTER":
            return state.map(tl => tl.id === action.id ? {...tl, filter: action.filter} : tl)
        case "CHANGE-TODOLIST-ENTITY-STATUS":
            return state.map(tl => tl.id === action.id ? {...tl, entityStatus: action.status} : tl)
        default:
            return state
    }
}

// actions
export const setTodolistsAC = (todolists: Array<TodolistType>) => (
    {type: "SET-TODOLISTS", todolists} as const)

export const addTodolistAC = (todolist: TodolistType) => (
    {type: "ADD-TODOLIST", todolist} as const)

export const removeTodolistAC = (id: string) => (
    {type: "REMOVE-TODOLIST", id} as const)

export const changeTodolistTitleAC = (id: string, title: string) => (
    {type: "CHANGE-TODOLIST-TITLE", id, title} as const)

export const changeTodolistFilterAC = (id: string, filter: FilterValuesType) => (
    {type: "CHANGE-TODOLIST-FILTER", id, filter} as const)

export const changeTodolistEntityStatusAC = (id: string, status: RequestStatusType) => (
    {type: "CHANGE-TODOLIST-ENTITY-STATUS", id, status} as const)

// thunks
export const fetchTodolistsTC = (): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(setAppStatusAC("loading"))
            const res = await todolistsAPI.getTodolists()
            dispatch(setTodolistsAC(res.data))
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        } finally {
            dispatch(setAppStatusAC("succeeded"))
        }
    }

export const addTodolistTC = (title: string): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(setAppStatusAC("loading"))
            const res = await todolistsAPI.createTodolist(title)
            if (res.data.resultCode === 0) {
                dispatch(addTodolistAC(res.data.data.item))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        } finally {
            dispatch(setAppStatusAC("succeeded"))
        }
    }

export const removeTodolistTC = (todolistId: string): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(setAppStatusAC("loading"))
            dispatch(changeTodolistEntityStatusAC(todolistId, "loading"))
            const res = await todolistsAPI.deleteTodolist(todolistId)
            if (res.data.resultCode === 0) {
                dispatch(removeTodolistAC(todolistId))
            } else {
                handleServerAppError(res.data, dispatch)
            }

        } catch (error) {
            handleServerNetworkError(error, dispatch)
        } finally {
            dispatch(setAppStatusAC("succeeded"))
        }
    }
export const changeTodolistTitleTC = (todolistId: string, title: string): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(setAppStatusAC("loading"))
            dispatch(changeTodolistEntityStatusAC(todolistId, "loading"))
            const res = await todolistsAPI.updateTodolist(todolistId, title)
            if (res.data.resultCode === 0) {
                dispatch(changeTodolistTitleAC(todolistId, title))
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
export type FilterValuesType = "all" | "active" | "completed"
export type TodolistsReducerActionsType =
    | ReturnType<typeof setTodolistsAC>
    | ReturnType<typeof addTodolistAC>
    | ReturnType<typeof removeTodolistAC>
    | ReturnType<typeof changeTodolistTitleAC>
    | ReturnType<typeof changeTodolistFilterAC>
    | ReturnType<typeof changeTodolistEntityStatusAC>
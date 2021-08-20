import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import {appReducer, AppReducerActionsType} from "./app-reducer"
import {authReducer, AuthReducerActionsType} from "../features/Login/auth-reducer"
import {todolistsReducer, TodolistsReducerActionsType} from "../features/TodolistsList/todolists-reducer"
import {tasksReducer, TasksReducerActionsType} from "../features/TodolistsList/Todolist/Task/tasks-reducer"

const rootReducer = combineReducers({
    app: appReducer,
    tasks: tasksReducer,
    todolists: todolistsReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppActionsType = AppReducerActionsType
    | AuthReducerActionsType
    | TodolistsReducerActionsType
    | TasksReducerActionsType

// @ts-ignore
window.store = store
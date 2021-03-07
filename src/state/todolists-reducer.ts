import {FilterValuesType, TodolistType} from "../App";
import { v1 } from "uuid";

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    todolistId: string
}

export type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
    todolistId: string
}

export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    todolistId: string
    title: string
}

export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    todolistId: string
    filter: string
}

export type ActionsType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType

export function todolistsReducer(state: Array<TodolistType>, action: ActionsType) {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.todolistId)
        case 'ADD-TODOLIST':
            const newTodolist: TodolistType = {
                id: action.todolistId,
                title: action.title,
                filter: 'all'
            }
            return [...state, newTodolist]
        case 'CHANGE-TODOLIST-TITLE':
            const todolists = state.map(tl => {
                if(tl.id === action.todolistId) {
                    return {...tl, title: action.title}
                } else {
                    return tl
                }
            })
            return todolists
        case 'CHANGE-TODOLIST-FILTER': {
            const todolists = state.map(tl => {
                if (tl.id === action.todolistId) {
                    return {...tl, title: action.filter}
                } else {
                    return tl
                }
            })
            return todolists
        }
        default:
            return state
    }
}

export const removeTodolistAC = (id: string): RemoveTodolistActionType => {
    return {type: 'REMOVE-TODOLIST', todolistId: id}
}

export const addTodolistAC = (title: string): AddTodolistActionType => {
    return { type: 'ADD-TODOLIST', title: title, todolistId: v1()}
}

export const changeTodolistTitleAC = (todolistId: string, title: string): ChangeTodolistTitleActionType => {
    return { type: 'CHANGE-TODOLIST-TITLE', title: title, todolistId: todolistId}
}

export const changeTodolistFilterAC = (todolistId: string, filter: FilterValuesType): ChangeTodolistFilterActionType => {
    return { type: 'CHANGE-TODOLIST-FILTER', filter: filter, todolistId: todolistId}
}

import {FilterValuesType, TodolistType} from "../App";
import { v1 } from "uuid";

export type RemoveTodoListActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

export type AddTodoListActionType = {
    type: 'ADD-TODOLIST'
    title: string
    todolistId: string
}

export type ChangeTodoListTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}

export type ChangeTodoListFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: string
}

export type ActionsType = RemoveTodoListActionType | AddTodoListActionType | ChangeTodoListTitleActionType | ChangeTodoListFilterActionType

export function todoListsReducer(state: Array<TodolistType>, action: ActionsType) {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            const newTodoList: TodolistType = {
                id: action.todolistId,
                title: action.title,
                filter: 'all'
            }
            return [...state, newTodoList]
        case 'CHANGE-TODOLIST-TITLE':
            const todoLists = state.map(tl => {
                if(tl.id === action.id) {
                    return {...tl, title: action.title}
                } else {
                    return tl
                }
            })
            return todoLists
        case 'CHANGE-TODOLIST-FILTER': {
            const todoLists = state.map(tl => {
                if (tl.id === action.id) {
                    return {...tl, title: action.filter}
                } else {
                    return tl
                }
            })
            return todoLists
        }
        default:
            return state
    }
}

export const RemoveTodolistAC = (id: string): RemoveTodoListActionType => {
    return {type: 'REMOVE-TODOLIST', id: id}
}

export const AddTodolistAC = (title: string): AddTodoListActionType => {
    return { type: 'ADD-TODOLIST', title: title, todolistId: v1()}
}

export const ChangeTodolistTitleAC = (todolistId: string, title: string): ChangeTodoListTitleActionType => {
    return { type: 'CHANGE-TODOLIST-TITLE', title: title, id: todolistId}
}

export const ChangeTodolistFilterAC = (todolistId: string, filter: FilterValuesType): ChangeTodoListFilterActionType => {
    return { type: 'CHANGE-TODOLIST-FILTER', filter: filter, id: todolistId}
}

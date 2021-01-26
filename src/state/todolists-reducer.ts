import {TodolistType} from "../App";
import { v1 } from "uuid";

type RemoveTodoListActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

type AddTodoListActionType = {
    type: 'ADD-TODOLIST'
    title: string
}

type ChangeTodoListTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}

type ChangeTodoListFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER'
    id: string
    filter: string
}

export type ActionType = RemoveTodoListActionType | AddTodoListActionType | ChangeTodoListTitleActionType | ChangeTodoListFilterActionType

export function todoListsReducer(state: Array<TodolistType>, action: ActionType) {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST':
            const newTodoList: TodolistType = {
                id: v1(),
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
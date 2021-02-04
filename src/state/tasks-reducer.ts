import {TasksStateType, TaskType} from "../App";
import {v1} from "uuid";
import {AddTodoListActionType, RemoveTodoListActionType} from "./todolists-reducer";

export type FirstActionType = {
    type: ''
    id: string
}

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    todoListId: string
}

export type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todoListId: string
}

export type ChangeTaskStatusActionType = {
    type: 'CHANGE-STATUS-TASK'
    taskId: string
    isDone: boolean
    todoListId: string
}

export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TITLE-TASK'
    taskId: string
    title: string
    todoListId: string
}

export type ActionsType = FirstActionType | RemoveTaskActionType | AddTaskActionType
    | ChangeTaskStatusActionType | ChangeTaskTitleActionType | AddTodoListActionType | RemoveTodoListActionType

export function tasksReducer(state: TasksStateType, action: ActionsType): TasksStateType {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let copyState = {...state}
            copyState[action.todoListId] = copyState[action.todoListId].filter(task => task.id !== action.taskId)
            return copyState
        }
        case 'ADD-TASK': {
            let task: TaskType = {id: v1(), title: action.title, isDone: false}
            return {...state, [action.todoListId]: [task, ...state[action.todoListId]]}
        }
        case 'CHANGE-STATUS-TASK': {
            return {...state, [action.todoListId]: state[action.todoListId].map(task => {
                    if (task.id !== action.taskId) {
                        return task
                    } else {
                        return {...task, isDone: action.isDone}
                    }
                })
            }
        }
        case 'CHANGE-TITLE-TASK': {
            return {...state, [action.todoListId]: state[action.todoListId].map(task => {
                    if (task.id !== action.taskId) {
                        return task
                    } else {
                        return {...task, title: action.title}
                    }
                })
            }
        }
        case 'ADD-TODOLIST' : {
            const stateCopy = {...state}
            stateCopy[action.todolistId] = []
            return stateCopy
        }
        case 'REMOVE-TODOLIST': {
            const stateCopy = {...state}
            delete stateCopy[action.id]
            return stateCopy
        }
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string, todoListId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId: taskId, todoListId: todoListId}
}

export const addTaskAC = (title: string, todoListId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title: title, todoListId: todoListId}
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todoListId: string): ChangeTaskStatusActionType => {
    return {type: 'CHANGE-STATUS-TASK', taskId: taskId, isDone: isDone, todoListId: todoListId}
}

export const changeTaskTitleAC = (taskId: string, title: string, todoListId: string): ChangeTaskTitleActionType => {
    return {type: 'CHANGE-TITLE-TASK', taskId: taskId, title: title, todoListId: todoListId}
}


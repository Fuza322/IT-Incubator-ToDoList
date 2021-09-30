import axios from "axios"
import moment from "moment"
import {RequestStatusType} from "../app/app-reducer"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        "API-KEY": "3ed83a1d-a130-403b-a242-5edd6be79968"
    }
})

// api
export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<ResponseType<{ userId: number }>>("auth/login", data)
    },
    me() {
        return instance.get<ResponseType<AuthMeResponseType>>("auth/me")
    },
    logout() {
        return instance.delete<ResponseType>("auth/login")
    }
}

export const todolistsAPI = {
    getTodolists() {
        return instance.get<TodolistType[]>("todo-lists")
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>("todo-lists", {title: title})
    },
    deleteTodolist(id: string) {
        return instance.delete<ResponseType>(`todo-lists/${id}`)
    },
    updateTodolist(id: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${id}`, {title: title})
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    createTask(todolistId: string, taskTitile: string) {
        return instance.post<ResponseType<{ item: TaskType }>>(`todo-lists/${todolistId}/tasks`,
            {
                title: taskTitile,
                description: "Empty description",
                deadline: moment().format("L"),
                priority: 0
            }
        )
    },
    updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
        return instance.put<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks/${taskId}`, model)
    }
}

// types
export type LoginParamsType = {
    email: string,
    password: string,
    rememberMe?: boolean,
    captcha?: string
}
export type AuthMeResponseType = {
    id: number,
    email: string,
    login: string
}
export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
export type TaskType = {
    description: string
    title: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
    entityStatus: RequestStatusType
}
export type UpdateTaskModelType = {
    title: string
    description: string
    status: TaskStatuses
    priority: TaskPriorities
    startDate: string
    deadline: string
}
type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}

export enum TaskStatuses {
    New = 0,
    InProgress = 1,
    Completed = 2,
    Draft = 3
}

export enum TaskPriorities {
    Low = 0,
    Middle = 1,
    Hight = 2,
    Urgently = 3,
    Later = 4
}
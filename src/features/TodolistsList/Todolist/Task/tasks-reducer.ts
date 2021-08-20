import {ThunkAction} from "redux-thunk"
import {TaskPriorities, TaskStatuses, TaskType, todolistsAPI, UpdateTaskModelType} from "../../../../api/todolists-api"
import {AppActionsType, AppRootStateType} from "../../../../app/store"
import {RequestStatusType, setAppStatusAC} from "../../../../app/app-reducer"
import {handleServerAppError, handleServerNetworkError} from "../../../../utils/error-utils"

const initialState: TasksStateType = {}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export const tasksReducer = (state: TasksStateType = initialState, action: AppActionsType): TasksStateType => {
    switch (action.type) {
        case "SET-TASKS":
            return {...state, [action.todolistId]: action.tasks.map(t => ({...t, entityStatus: "idle"}))}
        case "ADD-TASK":
            return {...state, [action.task.todoListId]: [action.task, ...state[action.task.todoListId]]}
        case "REMOVE-TASK":
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)}
        case "UPDATE-TASK":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(t => t.id === action.taskId ? {...t, ...action.model} : t)
            }
        case "CHANGE-TASK-ENTITY-STATUS":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(task => task.id === action.taskId ? {
                    ...task,
                    entityStatus: action.status
                } : task)
            }
        case "SET-TODOLISTS": {
            const copyState = {...state}
            action.todolists.forEach(tl => {
                copyState[tl.id] = []
            })
            return copyState
        }
        case "ADD-TODOLIST":
            return {...state, [action.todolist.id]: []}
        case "REMOVE-TODOLIST":
            const copyState = {...state}
            delete copyState[action.id]
            return copyState
        default:
            return state
    }
}

// actions
export const setTasksAC = (tasks: Array<TaskType>, todolistId: string) => (
    {type: "SET-TASKS", tasks, todolistId} as const)

export const addTaskAC = (task: TaskType) => (
    {type: "ADD-TASK", task} as const)

export const removeTaskAC = (taskId: string, todolistId: string) => (
    {type: "REMOVE-TASK", taskId, todolistId} as const)

export const updateTaskAC = (taskId: string, model: UpdateDomainTaskModelType, todolistId: string) => (
    {type: "UPDATE-TASK", model, todolistId, taskId} as const)

export const changeTaskEntityStatusAC = (todolistId: string, taskId: string, status: RequestStatusType) => (
    {type: "CHANGE-TASK-ENTITY-STATUS", todolistId, taskId, status} as const)

// thunks
export const fetchTasksTC = (todolistId: string): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(setAppStatusAC("loading"))
            const res = await todolistsAPI.getTasks(todolistId)
            const tasks = res.data.items
            dispatch(setTasksAC(tasks, todolistId))
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        } finally {
            dispatch(setAppStatusAC("succeeded"))
        }
    }
export const addTaskTC = (title: string, todolistId: string): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(setAppStatusAC("loading"))
            const res = await todolistsAPI.createTask(todolistId, title)
            if (res.data.resultCode === 0) {
                const task = res.data.data.item
                dispatch(addTaskAC(task))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        } finally {
            dispatch(setAppStatusAC("succeeded"))
        }
    }
export const removeTaskTC = (taskId: string, todolistId: string): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch) => {
        try {
            dispatch(setAppStatusAC("loading"))
            dispatch(changeTaskEntityStatusAC(todolistId, taskId, "loading"))
            const res = await todolistsAPI.deleteTask(todolistId, taskId)
            if (res.data.resultCode === 0) {
                dispatch(removeTaskAC(taskId, todolistId))
                dispatch(changeTaskEntityStatusAC(todolistId, taskId, "succeeded"))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        } catch (error) {
            handleServerNetworkError(error, dispatch)
        } finally {
            dispatch(setAppStatusAC("succeeded"))
        }
    }
export const updateTaskTC = (taskId: string, domainModel: UpdateDomainTaskModelType, todolistId: string): ThunkAction<void, AppRootStateType, unknown, AppActionsType> =>
    async (dispatch, getState: () => AppRootStateType) => {
        try {
            const state = getState()
            const task = state.tasks[todolistId].find(t => t.id === taskId)
            if (!task) {
                console.warn("task not found in the state")
                return
            }
            const apiModel: UpdateTaskModelType = {
                deadline: task.deadline,
                description: task.description,
                priority: task.priority,
                startDate: task.startDate,
                title: task.title,
                status: task.status,
                ...domainModel
            }
            dispatch(setAppStatusAC("loading"))
            dispatch(changeTaskEntityStatusAC(todolistId, taskId, "loading"))
            const res = await todolistsAPI.updateTask(todolistId, taskId, apiModel)
            if (res.data.resultCode === 0) {
                dispatch(updateTaskAC(taskId, domainModel, todolistId))
                dispatch(changeTaskEntityStatusAC(todolistId, taskId, "succeeded"))
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
export type UpdateDomainTaskModelType = {
    title?: string
    status?: TaskStatuses
    description?: string
    deadline?: string
    priority?: TaskPriorities
    startDate?: string
}

export type TasksReducerActionsType =
    | ReturnType<typeof setTasksAC>
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof removeTaskAC>
    | ReturnType<typeof updateTaskAC>
    | ReturnType<typeof changeTaskEntityStatusAC>

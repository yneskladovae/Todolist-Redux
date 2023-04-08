import {v1} from "uuid";
import {TasksStateType} from "../App";
import {AddTodolistActionType, RemoveTodolistAC, RemoveTodolistActionType} from "./todolists-reducer";

export const TasksReducer = (state: TasksStateType, action: ActionType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].filter(el => el.id !== action.payload.taskId)
            }
        }
        case "ADD-TASK": {
            const newTask = {id: v1(), title: action.payload.newTitle, isDone: false}
            return {...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]};
        }
        case "CHANGE-CHECKBOX-STATUS": {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(el => el.id === action.payload.taskId ? {
                    ...el,
                    isDone: action.payload.checkboxValue
                } : el)
            };
        }
        case "UPDATE-TASK-TITLE": {
            return {
                ...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(el => el.id === action.payload.taskId ? {
                    ...el,
                    title: action.payload.newTitle
                } : el)
            };
        }
        case "ADD-TODOLIST": {
            return {...state, [action.todolistId]: []};
        }
        case "REMOVE-TODOLIST": {
            const copyState = {...state}
            delete copyState[action.id]
            return copyState
            // const {[action.id]: [], ...rest} = {...state}
            // return rest
        }
        default:
            return state
    }
}

export type ActionType =
    ReturnType<typeof removeTaskAC>
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof changeCheckboxStatusAC>
    | ReturnType<typeof updateTaskTitleAC>
    | AddTodolistActionType
    | RemoveTodolistActionType

export const removeTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: "REMOVE-TASK",
        payload: {
            todolistId,
            taskId,
        }
    } as const
}

export const addTaskAC = (todolistId: string, newTitle: string) => {
    return {
        type: "ADD-TASK",
        payload: {
            todolistId,
            newTitle,
        }
    } as const
}

export const changeCheckboxStatusAC = (todolistId: string, taskId: string, checkboxValue: boolean) => {
    return {
        type: "CHANGE-CHECKBOX-STATUS",
        payload: {
            todolistId,
            taskId,
            checkboxValue,
        }
    } as const
}

export const updateTaskTitleAC = (todolistId: string, taskId: string, newTitle: string) => {
    return {
        type: "UPDATE-TASK-TITLE",
        payload: {
            todolistId,
            taskId,
            newTitle,
        }
    } as const
}
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true
})

type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

type GetTodolistType = {
    id: string
    title: string
    addedDate: Date
    order: number
}

export const todolistAPI = {
    updateTodolist(todoId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todoId}`, {title})
            .then(res => res.data)
    },
    deleteTodolist(todoId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todoId}`)
            .then(res => res.data)
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: GetTodolistType }>>(`todo-lists/`, {title})
            .then(res => res.data)
    },
    getTodolist() {
        return instance.get<GetTodolistType[]>(`todo-lists/`)
            .then(res => res.data)
    },
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: Date
    deadline: Date
    id: string
    todoListId: string
    order: number
    addedDate: Date
}


type GetTaskResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}


export const taskAPI = {
    updateTask(todoId: string, taskId: string, title: string) {
        return instance.put<ResponseType<TaskType>>(`todo-lists/${todoId}/tasks/${taskId}`, {title})
            .then(res => res.data)
    },
    deleteTodolist(todoId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todoId}/tasks/${taskId}`)
            .then(res => res.data)
    },
    createTask(todoId: string, title: string) {
        return instance.post<ResponseType<TaskType>>(`todo-lists/${todoId}/tasks`, {title})
            .then(res => res.data)
    },
    getTask(todoId: string) {
        return instance.get<GetTaskResponse>(`todo-lists/${todoId}/tasks`)
            .then(res => res.data.items)
    },
}

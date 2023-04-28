import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true
})

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
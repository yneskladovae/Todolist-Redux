import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        // axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        //     .then(res => {
        //         setState(res.data)
        //     })
        todolistAPI.getTodolist()
            .then(data => {
                setState(data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'What to do'
        // axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', payload, settings)
        //     .then(res => {
        //         setState(res.data)
        //     })
        todolistAPI.createTodolist(title)
            .then(data => {
                setState(data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '4e989268-2e36-4548-87ea-b01d98d480e5'
        // axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, settings)
        //     .then(res => {
        //         setState(res.data)
        //     })
        todolistAPI.deleteTodolist(todoId)
            .then(data => {
                setState(data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '83b9cf40-b69b-478e-9133-786cd82aed80'
        const title = 'What to learn'
        // axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoId}`, payload, settings)
        //     .then(res => {
        //         setState(res.data)
        //     })
        todolistAPI.updateTodolist(todoId, title)
            .then(data => {
                setState(data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

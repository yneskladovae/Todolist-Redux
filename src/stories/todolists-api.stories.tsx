import React, {useEffect, useState} from 'react'
import {taskAPI, todolistAPI} from "../api/api";

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

export const GetTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '9e2ed0c6-2d44-4601-a225-daf443f1a93b'
        taskAPI.getTask(todolistId)
            .then(data => {
                setState(data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const taskTitle = 'JS'
    const todolistId = '9e2ed0c6-2d44-4601-a225-daf443f1a93b'

    useEffect(() => {
        taskAPI.createTask(todolistId, taskTitle)
            .then(data => {
                setState(data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const taskTitle = 'HTML'
    const todolistId = '9e2ed0c6-2d44-4601-a225-daf443f1a93b'
    const taskId = '9d8b18c9-411a-4687-9e4a-e648d7856605'

    useEffect(() => {
        taskAPI.updateTask(todolistId, taskId, taskTitle)
            .then(data => {
                setState(data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '9e2ed0c6-2d44-4601-a225-daf443f1a93b'
    const taskId = 'eec7193e-f966-4907-a593-493b3c7ba1e8'

    useEffect(() => {
        taskAPI.deleteTodolist(todolistId, taskId)
            .then(data => {
                setState(data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
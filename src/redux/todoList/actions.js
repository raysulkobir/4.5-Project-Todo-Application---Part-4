import {LOADED, ADDED, TOGGLE, COLORSELECTED, DELETED, ALLCOMPLETE, CLEARCOMPLETED} from './actionTypes'

export const loaded = (todo) => {
    return {
        type: LOADED,
        payload: todo,
    }
}

export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText
    }
}

export const toggle = (todoId) => {
    return {
        type: TOGGLE,
        payload: todoId
    }
}

export const colorselected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        },
    }
}

export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId

    }
}

export const allcomplete = () => {
    return {
        type: ALLCOMPLETE
    }
}

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED
    }
}



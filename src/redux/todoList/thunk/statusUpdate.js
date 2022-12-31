import { toggle } from "../actions";

const statusUpdated = (id, status) => {
    console.log('status', status)
    return async (dispatch) => {
        const response = await fetch(`http://localhost:8000/api/todo/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                completed: status
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const todo = await response.json();
        dispatch(toggle(todo.id));
    }
}

export default statusUpdated;
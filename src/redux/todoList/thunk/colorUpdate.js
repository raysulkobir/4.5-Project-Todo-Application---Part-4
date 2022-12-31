import { colorselected } from "../actions";

const colorUpdated = (id, color) => {
   return async (dispatch) => {
        const response = await fetch(`http://localhost:8000/api/todo/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                color: color
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const todo = await response.json();
       dispatch(colorselected(todo.id, todo.color));
    }
}

export default colorUpdated;
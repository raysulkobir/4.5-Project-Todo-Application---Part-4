import { loaded } from "../actions";

const fetchTodo = async (dispatch) => {
    const response = await fetch('http://localhost:8000/api/todo');
    const todo = await response.json();
    dispatch(loaded(todo));
}

export default fetchTodo;
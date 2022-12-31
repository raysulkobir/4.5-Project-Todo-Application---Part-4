import { deleted } from "../actions";

const deleteTodo = (id) => {
   return async (dispatch) => {
       await fetch(`http://localhost:8000/api/todo/${id}`, {
            method: 'DELETE',
        
        });
       dispatch(deleted(id));
    }
}

export default deleteTodo;
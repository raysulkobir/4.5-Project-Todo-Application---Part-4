import { combineReducers } from 'redux'
import todoList from './todoList/reducer'
import filters from './filters/reducer'
 

export default combineReducers({
    todoList,
    filters
})


import Appdispatcher  from '../Dispatcher/appdispatcher'

export function createTodo(text) {
    Appdispatcher.dispatch({
        type : "CREATE_TODO",
        text 
    })
} 



export function deleteTodo(id) {
    Appdispatcher.dispatch({
        type : "DELETE_TODO",
        id 
    })
} 


export function doneTodo(id) {
    Appdispatcher.dispatch({
        type : "DONE_TODO",
        id 
    })
} 



export function updateTodo(id , text) {
    Appdispatcher.dispatch({
        type : "UPDATE_TODO",
        id,
        text, 
    })
} 


export function updateTodoTitle(id , title) {
    Appdispatcher.dispatch({
        type : "UPDATE_TODO_TITLE",
        id,
        title, 
    })
} 
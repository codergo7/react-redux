import { combineReducers } from 'redux'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  // always return a new object for the root state
 
    todos: todosReducer,
    filters: filtersReducer
})

export default rootReducer;

/* const initialState = {
   todos: [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
],
filters: {status: 'All', colors: []}
}

function nexTodoId(todos){
    const maxId = todos.reduce((maxId, todo)=Max.max(maxId,todo.id),-1)
    return maxId + 1;
}

// use the initialState as a default value
export default function appReducer(state=initialState,action){

    // The reducer normally looks at the action type field to decide what happens
    switch(action.type){
        // do something here based on  the different types of actions
        case '  todos/todoAdded':
            // we neet to return a new state object
            return{
                // that has all the existing state data
                ...state,
                //but has a new array for the 'todos' field
                todos: [
                    // with all of the old todos
                    ...state.todos,
                    // and the new todos object
                    {
                        // use an auto-incerementing numeric ID for this example
                        id: nextTodoId(state.todos),
                        text: action.payload,
                        completed: false
                    }
                ]                
            }
        case 'todos/todoToggled': {
            return{
                // again copy the entire state object
                ...state,
                // this time, we need to make a copy of the old todos array
                todos: state.todos.map(todo=>{
                    //if this is not the todo item we're looking for, leave it alone
                    if(todo.id !== action.payload){
                        return todo
                    }
                    // we've found the todo that has to change. Return a copy
                    return{
                        ...todo,
                        // flip the copmleted flag
                        completed: !todo.completed
                    }

                })
            }
        }

        case 'filters/statusFilterChanged':{
            return{
                // copy the whole state
                ...state,
                //overwrite the filters value
                filters:{
                    // copy the other filters fields
                    ...state.filters,
                    // and replace the status field with  the new value
                    status: action.payload
                }
            }
        }    
        
        default:
            // if this reducer doesn't recognize the action type, 
            //or doesn't care about this specific action, return the existing state unchanged 
        return state;
    }

}
*/
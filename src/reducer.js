const initialState = {
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
    
        
        default:
            // if this reducer doesn't recognize the action type, 
            //or doesn't care about this specific action, return the existing state unchanged 
        return state;
    }

}
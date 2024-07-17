import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

// function sayHello(){  
//     console.log("Hello world")
// }


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // create reducer
    reducers: {
        // props

        // addTodo: sayHello,   ---- fn can be created separately and it's reference can be given like this.
        
        //---- Or else it can be done directly like this.
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },    
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
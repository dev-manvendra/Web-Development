import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice= createSlice(
    {
        name: 'todo',
        initialState,
        reducers: {
            addTodo : (state, action)=>{
                const Todo = {
                    id: nanoid(),
                    msg : action.payload

                }
                state.todos.push(Todo);
            },
            deleteTodo : (state, action)=>{
                state.todos = state.todos.filter((each)=> each.id !== action.payload );
            }
            

        }
    }
)

export const {addTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer
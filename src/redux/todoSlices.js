import { createSlice } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
// console.log(uuidv4())

const todoSlices = createSlice({
    name: 'todo',
    initialState: [
        {
            id: '286e1487-486f-4e9c-9df3-28f01330c9e8',
            todoText: 'Hello World'
        },
        {
            id: '700e32bc-d809-43cd-bbd0-8991770dc333',
            todoText: 'Learn Redux'
        }
    ],
    reducers: {
        addTodo: (state, action) => {
            return [...state, action.payload]
        },
        removeTodo: (state, action) => {
            return [...state.filter(todo => todo.id !== action.payload)]
        }
    }
});

export const { addTodo, removeTodo } = todoSlices.actions;
export const todoReducers = todoSlices.reducer;
export const selectTodo = state => state;
import { configureStore } from '@reduxjs/toolkit';
import { todoReducers } from './todoSlices';

const store = configureStore({
    reducer: {
        todo: todoReducers
    }
})

export default store;
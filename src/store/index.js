import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies';
import usersReducer from './users';


// here are all reducers
export const store = configureStore({
    reducer:{
        movies: moviesReducer, // just to be simple moviesReducer rename with movies
        users: usersReducer
    }
})

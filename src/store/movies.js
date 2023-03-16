import { createSlice } from '@reduxjs/toolkit';


export const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        list:[
            {id:1, title:'Pulp fiction'},
            {id:2, title:'Rambo'}
        ]
    },
    reducers:{
        // here is the list of actions for this reducer "movie"
        // action has access to payoad
        addMovie:(state,action)=>{
            // const newMovie = {id:3,title:'Batman'}
            // state.list = [...state.list, newMovie]

            state.list = [...state.list, action.payload]
        }
    }
});

export const { addMovie } = moviesSlice.actions; // export action (addMovie)
export default moviesSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// for async reducers
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers', // 1st argument name of the reducer (action) is fetchUsers

    // 2nd argument
    async(obj,{ rejectWithValue, fulfillWithValue })=>{
        // console.log(thunkAPI.getState())
        // thunkAPI.dispatch(testAsyncDispatch())
        try{
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            return res.data
            //return fulfillWithValue('Data received')
        } catch(err){
            return rejectWithValue('Oop, try again later')
        }
    }
)

export const usersSlice = createSlice({
    name:'users',
    initialState:{
        type:'Guest',
        users:[],
        loading:false
        //test:false
    },
    reducers:{
        setType:(state,action)=>{
            state.type = action.payload || 'Guest'
        },
        // testAsyncDispatch:(state)=>{
        //     state.test = true
        // }
    },
    // 3 different states pending, fulfilled, rejected - FOR fetchUsers async reducer
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending,(state)=>{
           state.loading = true;
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = action.payload; // save users prom payload to the redux state
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.loading = false;
            console.log(action.payload)
        })
    }
})


export const {setType,testAsyncDispatch} = usersSlice.actions;
export default usersSlice.reducer;
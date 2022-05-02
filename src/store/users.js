import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async(thunkAPI)=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users').then(
            (response) => response.data 
        );
        return res
    }
)

export const usersSlice = createSlice({
    name:'users',
    initialState:{
        type:'Guest',
        users:[]
    },
    reducers:{
        setType:(state,action)=>{
            state.type = action.payload || 'Guest'
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending,(state)=>{
            console.log('pending')
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            console.log('fulfilled');
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected,(state)=>{
            console.log('rejected')
        })
    }
})


export const {setType} = usersSlice.actions;
export default usersSlice.reducer;
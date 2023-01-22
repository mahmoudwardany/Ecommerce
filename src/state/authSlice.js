import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    msg:"",
    user:"",
    token:"",
    Loading:false,
    error:""
}
const signup=createAsyncThunk('signup/authSlice',async()=>{
    
})
const authSlice=createSlice({
    name:"user",
    initialState,
    reducers:{

    },
    extraReducers:{

    }
})

export default authSlice.reducer
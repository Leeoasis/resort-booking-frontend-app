import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchsession = createAsyncThunk(
    "sign_in/fetchsession",
    async () => {
        const response = await axios.post('http://127.0.0.1:3000/users/sign_in');
        return await response.data;
    }
);
const initialState = {
    sign_in: {},
    error: undefined,
    isLoading: false
}

const session_slice = createSlice({
    name: "sign_in",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchsession.pending, (state)=>{
            state.isLoading = true
        });
        builder.addCase(fetchsession.fulfilled, (state, action)=>{
            state.isLoading = false
            state.sign_in = action.payload
        });
        builder.addCase(fetchsession.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.error.message
        });
    }
})

export default session_slice.reducer;
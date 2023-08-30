import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchreg = createAsyncThunk(
  'sign_in/fetchregistration',
  async (user) => {
    const url = 'http://127.0.0.1:3000/signup';
    const response = await axios.post(url, user);
    localStorage.setItem('token', response.headers.get('Authorization'));
    localStorage.setItem('data', JSON.stringify(response.data));
    return response.data;
  },
);

const initialState = {
  sign_up: {},
  error: undefined,
  isLoading: false,
};

const registrationSlice = createSlice({
  name: 'sign_up',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchreg.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchreg.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sign_up = action.payload;
    });
    builder.addCase(fetchreg.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default registrationSlice.reducer;

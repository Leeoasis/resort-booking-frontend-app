import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchsession = createAsyncThunk(
  'sign_in/fetchsession',
  async (login) => {
    const url = 'http://127.0.0.1:3000/login';
    const response = await axios.post(url, login);
    if (response.status === 200) {
      localStorage.setItem('token', response.headers.get('Authorization'));
      localStorage.setItem('data', JSON.stringify(response.data));
    }
    return response.data;
  },
);
const initialState = {
  sign_in: {},
  error: undefined,
  isLoading: false,
};

const sessionSlice = createSlice({
  name: 'sign_in',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchsession.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchsession.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sign_in = action.payload;
    });
    builder.addCase(fetchsession.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default sessionSlice.reducer;

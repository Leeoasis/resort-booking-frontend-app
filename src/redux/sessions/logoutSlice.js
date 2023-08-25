import { createSlice } from '@reduxjs/toolkit';
import logoutApi from './api';

const initialState = {
  info: {
    token: '',
    datainside: '',
  },
  error: undefined,
  isLoading: false,
};
const logoutSlice = createSlice({
  name: 'logout',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(logoutApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logoutApi.fulfilled, (state, action) => {
      state.info = action.payload;
      localStorage.removeItem('token');
      localStorage.removeItem('data');
    });
    builder.addCase(logoutApi.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

const logoutReducer = logoutSlice.reducer;
export default logoutReducer;

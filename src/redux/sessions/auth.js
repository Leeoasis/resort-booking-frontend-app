import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: undefined,
  isLoading: false,
  loggedIn: false,
};

const authSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    update: (state) => {
      state.data = [JSON.parse(localStorage.getItem('data'))];
      state.loggedIn = !!localStorage.getItem('data');
    },
  },
});

export const { update } = authSlice.actions;
export default authSlice.reducer;

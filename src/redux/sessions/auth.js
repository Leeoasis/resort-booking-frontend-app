import { createSlice } from '@reduxjs/toolkit';

const initialLoggedIn = !!localStorage.getItem('data');
const initialState = {
  data: [],
  error: undefined,
  isLoading: false,
  loggedIn: initialLoggedIn,
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

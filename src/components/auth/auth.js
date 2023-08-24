import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: undefined,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    update: (state) => {
      state.data = [JSON.parse(localStorage.getItem('data'))];
    },
  },

});

export const { update } = authSlice.actions;
export default authSlice.reducer;

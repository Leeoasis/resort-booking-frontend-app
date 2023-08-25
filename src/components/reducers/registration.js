import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const urlSignUp = 'http://127.0.0.1:3000/users';

export const fetchreg = createAsyncThunk(
  'sign_in/fetchregistration',
  async (users) => {
    const response = await fetch(urlSignUp, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          name: users.name,
          email: users.email,
          password: users.password,
        },
      }),
    });
    const data = await response.json();
    return data;
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

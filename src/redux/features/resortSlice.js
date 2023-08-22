import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  resorts: [],
  resort: [],
  status: 'idle',
  error: null,
  isLoading: false,
  isSuccessful: false,
};

const URL = 'http://localhost:3000/api/v1/';

// Fetch all resorts
export const fetchResorts = createAsyncThunk(
  'resorts/fetchResorts',
  async (_, thunkApi) => {
    try {
      const response = await axios.get(`${URL}resorts`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

// Fetch a single resort
export const fetchResort = createAsyncThunk(
  'resort/fetchResort',
  async (resortId, thunkApi) => {
    try {
      const response = await axios.get(`${URL}resorts/${resortId}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

// Create a new resort
export const createResort = createAsyncThunk(
  'resort/createResort',
  async (resortData, thunkApi) => {
    try {
      const response = await axios.post(`${URL}resorts`, resortData,
        {
          headers: {
            authoriztion: thunkApi.getState().auth.token,
          },
        });
      thunkApi.dispatch(fetchResorts());
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

// Delete a resort
export const deleteResort = createAsyncThunk(
  'resort/deleteResort',
  async (resortId, thunkApi) => {
    try {
      const response = await axios.delete(`${URL}resorts/${resortId}`,
        {
          headers: {
            authoriztion: thunkApi.getState().auth.token,
          },
        });
      thunkApi.dispatch(fetchResorts());
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

// Resort Slice
const resortSlice = createSlice({
  name: 'resorts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch all resorts
    builder.addCase(fetchResorts.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchResorts.fulfilled, (state, action) => ({
      ...state,
      status: 'succeeded',
      resorts: action.payload,
      isLoading: false,
    }));
    builder.addCase(fetchResorts.rejected, (state, action) => ({
      ...state,
      status: 'failed',
      error: action.error.message,
      isLoading: false,
    }));

    // Fetch a single resort
    builder.addCase(fetchResort.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchResort.fulfilled, (state, action) => ({
      ...state,
      status: 'succeeded',
      resort: action.payload,
      isLoading: false,
    }));
    builder.addCase(fetchResort.rejected, (state, action) => ({
      ...state,
      status: 'failed',
      error: action.error.message,
      isLoading: false,
    }));

    // Create a new resort
    builder.addCase(createResort.pending, (state) => ({
      ...state,
      status: 'loading',
      isSuccessful: false,
    }));
    builder.addCase(createResort.fulfilled, (state, action) => ({
      ...state,
      status: 'succeeded',
      resorts: [...state.resorts, action.payload],
      isSuccessful: true,
    }));
    builder.addCase(createResort.rejected, (state, action) => ({
      ...state,
      status: 'failed',
      error: action.error.message,
      isSuccessful: false,
    }));

    // Delete a resort
    builder.addCase(deleteResort.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(deleteResort.fulfilled, (state, action) => ({
      ...state,
      status: 'succeeded',
      resorts: state.resorts.filter((item) => item.id !== action.payload.id),
    }));
    builder.addCase(deleteResort.rejected, (state, action) => ({
      ...state,
      status: 'failed',
      error: action.error.message,
    }));
  },
});

export default resortSlice.reducer;

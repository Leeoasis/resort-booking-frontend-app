import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/v1/resorts';

const initialState = {
  resorts: [],
  resort: {},
  status: 'idle',
  loading: false,
  error: null,
  reservedresorts: [],
};

export const fetchresorts = createAsyncThunk('resorts/fetchresorts', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return isRejectedWithValue(error.response.data);
  }
});

// Fetch a single resort
export const fetchResort = createAsyncThunk(
  'resort/fetchResort',
  async (id, thunkApi) => {
    try {
      const response = await axios.get(`${url}/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  },
);

const resortsSlice = createSlice({
  name: 'resorts',
  initialState,
  reducers: {
    reserveresort(state, action) {
      const ResortId = action.payload;
      const resort = state.resorts.find((resort) => resort.id === ResortId);
      if (resort) {
        resort.reserved = !resort.reserved;
      }
    },
    bookedresorts(state) {
      const booked = state.resorts.filter((resort) => resort.reserved === true);
      state.reservedresorts = [...booked];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchresorts.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchresorts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.resorts = action.payload.map((resort) => ({
          id: resort.id,
          name: resort.name,
          description: resort.description,
          image: resort.image_url,
        }));
        state.loading = false;
      })
      .addCase(fetchresorts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // fetch a single resort
      .addCase(fetchResort.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchResort.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.resort = action.payload;
        state.loading = false;
      })
      .addCase(fetchResort.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { reserveresort, bookedresorts } = resortsSlice.actions;

export default resortsSlice.reducer;

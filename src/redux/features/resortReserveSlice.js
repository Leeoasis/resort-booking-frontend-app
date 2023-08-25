import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseUrl = 'http://127.0.0.1:3000/api/v1/bookings/';

export const postReservation = createAsyncThunk(
  'reservation/postReservation', // Unique action type
  async (reserve) => {
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: reserve.id,
        resort_id: reserve.resort_id,
        selected_date: reserve.selected_date,
        selected_city: reserve.selected_city,
      }),
    });
    const data = await response.json();
    return data;
  },
);

export const getReservations = createAsyncThunk(
  'reservation/getReservations', // Unique action type
  async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const resp = await fetch(baseUrl, requestOptions);
    const data = await resp.json();
    console.log(data);
    return data;
  },
);

const initialState = {
  reserve: [],
  data: null,
  isLoading: false,
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {}, // You can define additional reducers here if needed
  extraReducers: (builder) => {
    builder
      .addCase(postReservation.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(postReservation.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        data: payload,
      }))
      .addCase(postReservation.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(getReservations.pending, (state) => {
        console.log('Fetching reservations...');
        return {
          ...state,
          isLoading: true,
        };
      })
      .addCase(getReservations.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        reserve: payload,
      }))
      .addCase(getReservations.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default reservationSlice.reducer;
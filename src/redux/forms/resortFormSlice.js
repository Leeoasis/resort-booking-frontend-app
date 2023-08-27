import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://localhost:3000/api/v1/bookings';

export const postResorts = createAsyncThunk('fromSlice/postResorts', async (resort) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: resort.name,
      image: resort.image_url,
      address: resort.address,
      description: resort.description,
      phone: resort.phone_number,
      email: resort.email,
      city: resort.city,
      country: resort.country,
      available: resort.available_rooms,
      occupancy: resort.max_occupancy,
      price: resort.base_price,
    }),
  });
  const data = await response.json();
  return data;
});

const initialState = {
  isLoading: false,
};

const resortFormSlice = createSlice({
  name: 'resortFormSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postResorts.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(postResorts.fulfilled, (state) => ({
      ...state,
      isLoading: false,
    }));
    builder.addCase(postResorts.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});

export default resortFormSlice.reducer;

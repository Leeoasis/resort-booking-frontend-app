import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/api/v1/resorts';

export const postResorts = createAsyncThunk('formSlice/postResorts', async (resort) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: resort.name,
      address: resort.address,
      image_url: resort.image,
      description: resort.description,
      phone_number: resort.phoneNumber,
      email: resort.email,
      city: resort.city,
      country: resort.country,
      available_rooms: resort.availableRooms,
      max_occupancy: resort.maxOccupancy,
      base_price: resort.basePrice,
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

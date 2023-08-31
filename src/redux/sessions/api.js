import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const logoutApi = createAsyncThunk('user/logout', async () => {
  const url = 'https://resort-app.onrender.com/logout';
  const response = await axios.delete(url, {
    method: 'delete',
    headers: {
      'content-type': 'application/json',
      'authorization': localStorage.getItem('token'),
    },
  });
  return response.data;
});
export default logoutApi;

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchDelete = createAsyncThunk('Resorts/delete', (id) => {
  const response = axios.delete(`http://localhost:3000/api/v1/resorts/${id}`, {
    headers: {
      'content-type': 'application/json',
      authorization: localStorage.getItem('token'),
    },
  });
  return response.data;
});
export default fetchDelete;

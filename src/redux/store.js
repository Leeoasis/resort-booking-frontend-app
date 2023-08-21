import { configureStore } from '@reduxjs/toolkit';
import resortReducers from './features/resortSlice';

const store = configureStore({
  reducer: {
    resort: resortReducers,
  },
});

export default store;

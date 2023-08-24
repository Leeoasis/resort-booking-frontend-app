import { configureStore } from '@reduxjs/toolkit';
import sessionSlice from './reducers/sessions';
import registrationSlice from './reducers/registration';
import authSlice from './auth/auth';

const store = configureStore({
  reducer: {
    data: authSlice,
    sign_in: sessionSlice,
    sign_up: registrationSlice,
  },
});

export default store;

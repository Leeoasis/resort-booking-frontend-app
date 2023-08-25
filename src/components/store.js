import { configureStore } from '@reduxjs/toolkit';
import sessionSlice from './reducers/sessions';
import registrationSlice from './reducers/registration';
import authSlice from './auth/auth';
import logoutSlice from './reducers/logoutSlice';

const store = configureStore({
  reducer: {
    logout: logoutSlice,
    data: authSlice,
    sign_in: sessionSlice,
    sign_up: registrationSlice,
  },
});

export default store;

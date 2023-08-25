import { configureStore } from '@reduxjs/toolkit';
import resortsReducer from './resortsSlice';
import registrationSlice from './sessions/registration';
import sessionSlice from './sessions/sessions';
import logoutSlice from './reducers/logoutSlice';
import authSlice from './auth/auth';


const store = configureStore({
  reducer: {
    logout: logoutSlice,
    data: authSlice,
    sign_in: sessionSlice,
    sign_up: registrationSlice,
    resorts: resortsReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import resortsReducer from './resortsSlice';
import registrationSlice from './sessions/registration';
import sessionSlice from './sessions/sessions';
import logoutSlice from './sessions/logoutSlice';
import authSlice from './sessions/auth';
import reservationReducer from './features/resortReserveSlice';
import resortReducer from './forms/resortFormSlice';

const store = configureStore({
  reducer: {
    logout: logoutSlice,
    data: authSlice,
    sign_in: sessionSlice,
    sign_up: registrationSlice,
    resorts: resortsReducer,
    reservation: reservationReducer,
    resortForm: resortReducer,
  },
});

export default store;

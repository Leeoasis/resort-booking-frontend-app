import { configureStore } from '@reduxjs/toolkit';
import resortsReducer from './resortsSlice';
import registrationSlice from './sessions/registration';
import reservationReducer from './features/resortReserveSlice';
import sessionSlice from './sessions/sessions';
import resortReducer from './forms/resortFormSlice';

const store = configureStore({
  reducer: {
    sign_in: sessionSlice,
    sign_up: registrationSlice,
    resorts: resortsReducer,
    reservation: reservationReducer,
    resortForm: resortReducer,
  },
});

export default store;

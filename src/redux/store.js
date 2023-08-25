import { configureStore } from '@reduxjs/toolkit';
import resortsReducer from './resortsSlice';
import registrationSlice from './sessions/registration';
import sessionSlice from './sessions/sessions';

const store = configureStore({
  reducer: {
    sign_in: sessionSlice,
    sign_up: registrationSlice,
    resorts: resortsReducer,
  },
});

export default store;

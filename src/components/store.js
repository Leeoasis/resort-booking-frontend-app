import { configureStore } from '@reduxjs/toolkit';
import sessionSlice from './reducers/sessions';
import registrationSlice from './reducers/registration';

const store = configureStore({
  reducer: {
    sign_in: sessionSlice,
    sign_up: registrationSlice,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import session_slice from './reducers/sessions';
import registration_slice from './reducers/registration';

const store = configureStore({
  reducer: {
    sign_in: session_slice,
    sign_up: registration_slice,
  },
});

export default store;

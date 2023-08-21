import { configureStore } from "@reduxjs/toolkit";
import session_slice from './reducers/sessions'
const store = configureStore({
    reducer: {
        sign_in:session_slice,
    }
})

export default store;
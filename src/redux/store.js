import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./userSlice"

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const store = createStore(reducers, enhancer(applyMiddleware(reduxThunk)));
const store = configureStore({
    reducer: {
        user: userSlice,
    }
})
export default store;
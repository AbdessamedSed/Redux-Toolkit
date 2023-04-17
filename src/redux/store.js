import {createStore, applyMiddleware} from 'redux';
import counterReducer from './reducers/counterReducer';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const store = createStore(reducers, enhancer(applyMiddleware(reduxThunk)));
const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})
export default store;
// src/reducers/index.js
import FarmsReducer from './reducer_farms';
import LocationReducer from './reducer_geolocation';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    farms: FarmsReducer,
    location: LocationReducer,
    form: formReducer
});

export default rootReducer;

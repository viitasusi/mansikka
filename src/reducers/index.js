// src/reducers/index.js
import FarmsReducer from './reducer_farms';
import LocationReducer from './reducer_geolocation';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    farms: FarmsReducer,
    location: LocationReducer
});

export default rootReducer;

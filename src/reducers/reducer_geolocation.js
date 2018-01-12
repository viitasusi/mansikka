import _ from 'lodash';
import { GET_LOCATION } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_LOCATION:
      console.log(action.payload);
      return { lat: action.payload.coords.latitude, lng: action.payload.coords.longitude };
    default:
      return state;
  }
}

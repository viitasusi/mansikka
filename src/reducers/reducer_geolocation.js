
import { GET_LOCATION } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_LOCATION:
      return { lat: action.payload.coords.latitude, lng: action.payload.coords.longitude };
    default:
      return state;
  }
}

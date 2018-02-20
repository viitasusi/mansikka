import _ from 'lodash';
import { FETCH_FARMS, FETCH_FARM } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_FARM:
      return { ...state, [action.payload.id]: action.payload }
    case FETCH_FARMS:
      console.log(action.payload);
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
}

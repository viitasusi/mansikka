import _ from 'lodash';
import { FETCH_FARMS, FETCH_FARM } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_FARM:
      return { ...state, [action.payload.id]: action.payload }
    case FETCH_FARMS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}

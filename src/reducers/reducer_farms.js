import _ from 'lodash';
import { FETCH_FARMS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_FARMS:
      return _.mapKeys(action.payload, 'id');
    default:
      return state;
  }
}

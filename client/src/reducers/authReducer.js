import { FETCH_USER } from '../actions/types';

export default function(state = null, action = null) {
  console.log('in action reducer :', state);
  console.log('action.type :', action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

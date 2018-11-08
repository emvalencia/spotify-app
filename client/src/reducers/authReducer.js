import { FETCH_USER } from '../actions/types';

export default function(state = null, action = null) {
  console.log('in auth reducer :', state);
  console.log('action.type :', action);
  console.log('action.payload :', action.payload);
  switch (action.type) {
    case FETCH_USER: {
      if (action.payload.error) return false;
      return action.payload || false;
    }
    default:
      return state;
  }
}

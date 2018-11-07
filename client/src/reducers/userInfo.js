import { FETCH_USER } from '../actions/types';

const defaultState = {
  name: 'Joe Smuckatelly',
  id: '1234'
};

export default function(state = defaultState, action = null) {
  console.log('in userInfo reducer :', state);
  console.log('action.type :', action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}

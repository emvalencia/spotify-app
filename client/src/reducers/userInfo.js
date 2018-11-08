import { FETCH_USER } from '../actions/types';

const defaultState = {
  displayName: '',
  imageURL: ''
};

export default function(state = defaultState, action = null) {
  console.log('in userInfo reducer :', state);
  console.log('action.type :', action);
  switch (action.type) {
    case FETCH_USER: {
      const newState = { ...state };

      if (action.payload.images) newState.imageURL = action.payload.images[0].url; //should set to ternary expression
      if (action.payload.display_name) newState.displayName = action.payload.display_name; //should set to ternary expression

      console.log('new state', newState);
      return newState || false;
    }
    default:
      return state;
  }
}

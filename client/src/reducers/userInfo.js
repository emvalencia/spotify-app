import { FETCH_USER } from '../actions/types';

const defaultState = {
  displayName: '',
  imageURL: '',
  externalURL: ''
};

export default function(state = defaultState, action = null) {
  console.log('in userInfo reducer :', state);
  console.log('action.type :', action);
  switch (action.type) {
    case FETCH_USER: {
      const newState = { ...state };

      //should set to ternary expressions
      if (action.payload.images) newState.imageURL = action.payload.images[0].url; 
      if (action.payload.display_name) newState.displayName = action.payload.display_name; 
      if (action.payload.external_urls) newState.externalURL = action.payload.external_urls.spotify; 

      console.log('new state', newState);
      return newState || false;
    }
    default:
      return state;
  }
}

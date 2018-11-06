// this action grabs user data from the backend
// backend should return value or null
import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  // console.log('getting auth from backend');

  let res = {};
  // const res = await axios.get('http://localhost:8888/api/current_user');
  // console.log('res :', res);
  dispatch({ type: FETCH_USER, payload: res.data || false });
};

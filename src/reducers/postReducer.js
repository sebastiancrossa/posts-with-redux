// postReducer will handle every action

import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state, // return current state
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload // sing post
      };
    default:
      return state;
  }
}

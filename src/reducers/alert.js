//function that takes a state and action (will be dispatched from an actions file)
import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = []

export default function( state= initialState, action) {
  const { type, payload } = action;
  console.log(state,type, payload )

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
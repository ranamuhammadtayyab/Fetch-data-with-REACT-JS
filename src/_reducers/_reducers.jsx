import {ADD_NUMBER,SUBTRACT_NUMBER} from '../_actions/_action';
import {combineReducers } from "redux";

// Reducers
const mathReducer = (state = {number: 0}, action) => {
    if (action.type === ADD_NUMBER) {
        return {...state, number: state.number + action.payload};
    }
    else if (action.type === SUBTRACT_NUMBER) {
        return {...state, number: state.number - action.payload};
    }
    return state;
  };
  // Root Reducers
export const rootReducer = combineReducers({
   math: mathReducer,
  });


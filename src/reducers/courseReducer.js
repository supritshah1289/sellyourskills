/*
  it takes 2 parameters state,action. It takes state and action and returns new state
*/

import * as types from '../actions/actionTypes';

export default  function courseReducer(state = [], action){
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
    // debugger;
      return action.courses;

    default:
      return state;
  }
}

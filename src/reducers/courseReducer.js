/*
  it takes 2 parameters state,action. It takes state and action and returns new state
*/

import * as types from '../actions/actionTypes'

export default  function courseReducer(state = [], action){
  switch(action.type){
    case types.CREATE_COURSE:
    // debugger;
      return[...state,
             Object.assign({}, action.course)
             ];

    default:
      return state;
  }
}

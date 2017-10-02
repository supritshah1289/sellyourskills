import * as types from '../actions/actionTypes';

export default  function mehndiReducer(state = [], action){
  switch(action.type){
    case types.LOAD_MEHNDI_SUCCESS:
    // debugger;
      return action.mehndis;

    default:
      return state;
  }
}

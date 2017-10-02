import * as types from './actionTypes';
import mehndiApi from '../api/mehndiApi';

export function loadMehndiSuccess(mehndis){
  // debugger;
  return {type: types.LOAD_MEHNDI_SUCCESS, mehndis};
}

export function loadMehndi(){
  return function(dispatch){
    return mehndiApi.getAllMehndis().then(mehndis =>{
      dispatch(loadMehndiSuccess(mehndis));
    }).catch(error => {
      throw(error);
    });
  };
}


/*
  while importing lowercase is a function and upper case is react-component

*/

import {createStore, applyMiddleware}          from 'redux';
import rootReducer                             from '../reducers';
// import reduxImmutableStateInvariant            from 'redux-immutable-state-invariant';


export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState
    );
}

//can be used as third argument for createStore method
// applyMiddleware(reduxImmutableStateInvariant());

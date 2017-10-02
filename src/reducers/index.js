//import combineReducers function that comes from redux

import {combineReducers}  from 'redux';
import courses            from './courseReducer';
import mehndis            from './mehndiReducer';

const rootReducer = combineReducers({
  courses,
  mehndis
});

export default rootReducer;

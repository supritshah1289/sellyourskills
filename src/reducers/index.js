//import combineReducers function that comes from redux

import {combineReducers}  from 'redux';
import courses            from './courseReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;

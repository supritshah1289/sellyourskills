/*
action creator just export function
type property is require
type propery specifies action types. In this case we are creating course
second parameter in return is course: course but if right matches left it is course

getAllCOurses will be replaced with API call like Fetch

*/
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
  // debugger;
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses().then(courses =>{
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

//thunk always returns a function that accepts a dispatch

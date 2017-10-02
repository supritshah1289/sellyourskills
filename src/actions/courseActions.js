/*
action creator just export function
type property is require
type propery specifies action types. In this case we are creating course
second parameter in return is course: course but if right matches left it is course
*/
import * as types from './actionTypes';


export function createCourse(course){
  // debugger;
  return {type: types.CREATE_COURSE, course};
}

import React, {PropTypes}     from 'react';
import {connect}              from 'react-redux';
import {bindActionCreators}   from 'redux';
import * as courseActions     from '../../actions/courseActions';


class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      course: {title: ""}
    };

    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
    // console.log(event.target.value);
  }

  onClickSave(){
    // alert(`Saving ${this.state.course.title}`);
    this.props.actions.createCourse(this.state.course);
  }


  courseRow(course, index){
    return <div key={index}> {course.title} </div>;
  }


  render(){
    // debugger;
    return(
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input type="text"
               onChange={this.onTitleChange}
               value={this.state.course.title} />
        <input type="submit"
               value="save"
               onClick={this.onClickSave}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  // debugger;
   return{
    courses: state.courses
   };
   //ownprops: we can access all the props within this component
   //its a reference to the components own props

}
//the above state.courses coming from root reducer key word courses

function mapDispatchToProps(dispatch){
  //this function is used from exposing what actions you want to expose on your component
  //what actions are available in our component
  return{
    // createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

//connect takes two parameters mapStateToProps, mapDispatchToProps.
//conenct is a higher order function which wraps our coursespage container and returns

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import Mehndi from './components/mehndi/Mehndi';
import SignupForm from './components/common/SignupForm'
import LoginForm from './components/common/LoginForm';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="course" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
    <Route path="mehndi" component={Mehndi} />
    <Route path="signup" component={SignupForm} />
    <Route path="login" component={LoginForm} />
   </Route>
)

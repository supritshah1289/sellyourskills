//this file is the entry point of our React router
import 'babel-polyfill';
import React                        from 'react';
import {render}                     from 'react-dom';
import configureStore               from './store/configureStore';
import {Provider}                   from 'react-redux';
import {Router, browserHistory}     from 'react-router';
import routes                       from './routes';
import {loadCourses}                from './actions/courseActions';
import {loadMehndi}                 from './actions/mehndiActions';

import './styles/styles.css'; //webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadMehndi());



render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);

//provider is a component that attaches our store to our react container components.

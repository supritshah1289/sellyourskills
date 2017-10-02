import React from 'react';
import {Link} from 'react-router';//importing Link component from react-router

class HomePage extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <h1>Pluralsight Admin</h1>
        <p>React, Redux and React router in ES6</p>
        <button>Click me</button>
        <Link to="about" className="btn btn-primary btn-lg button"> Learn more</Link>
      </div>
    );
  }
}

export default HomePage;

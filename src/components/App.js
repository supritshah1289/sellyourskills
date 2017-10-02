import React from 'react';
//childrens are passed in from react router
import Header from './common/Header';
import PropTypes from 'prop-types';
class App extends React.Component{
  render(){
    return(
      <div className="container-fluid main-container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

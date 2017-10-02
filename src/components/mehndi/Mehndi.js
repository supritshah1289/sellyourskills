import React, {PropTypes}     from 'react';
import {connect}              from 'react-redux';
import {bindActionCreators}   from 'redux';
import * as mehndiActions     from '../../actions/mehndiActions';
import MehndiList             from './MehndiList';


class Mehndi extends React.Component{
  constructor(props, context){
    super(props, context)
    this.state = {
      mehndi: {title: ""}
    };
  }

  render(){
    const {mehndis} = this.props;
    return(
      <div>
        <h2>Mehndi</h2>
        <MehndiList mehndis={mehndis}/>
      </div>
    );
  }
}

Mehndi.propTypes = {
  mehndis: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    mehndis: state.mehndis
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(mehndiActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mehndi);

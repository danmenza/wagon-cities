import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { activateCity } from '../actions/index';

const City = (props) => {
  return (
    <li className="list-group-item" onClick={() => props.activateCity(props.city)}>
      {props.city.name}
    </li>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { activateCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);

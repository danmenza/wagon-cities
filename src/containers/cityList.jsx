import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCities } from '../actions';
import City from '../containers/city';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <ul className="cities">
        {this.props.cities.map(city => <City city={city} key={city.name} />)}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

function mapReduxStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);

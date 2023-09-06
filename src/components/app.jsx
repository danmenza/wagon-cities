import React, { Component } from 'react';

import CityList from '../containers/cityList';
import ActiveCity from '../containers/activeCity';

class App extends Component {
  render() {
    return (
      <div className="app">
        <CityList />
        <ActiveCity />
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import Header from './Header';
import Select from './Select';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container text-center">
          <h5 className="pageHead"> Select a News Source from the List</h5>
          <Select default="bbc-news"/>
        </div>
      </div>
    );
  }
}

export default App;

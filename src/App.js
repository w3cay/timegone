import React, { Component } from 'react';
import TimeGone from './TimeGone';

class App extends Component {
  constructor(props) {
    super(props);
    this.title = 'Time Gone';
  }

  render() {
    return (
      <div className="app">
        <h3>光阴荏苒，日月如梭</h3>
        <TimeGone></TimeGone>
      </div>
    );
  }
}

export default App;

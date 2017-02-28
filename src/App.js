import React, { Component } from 'react';
import TimeGone from './TimeGone';

class App extends Component {
  constructor(props) {
    super(props);
    this.title = 'Time Gone';
  }

  render() {
    return (
      <div className="App">
        <h1>Hello, world!</h1>
        <TimeGone></TimeGone>
      </div>
    );
  }
}

export default App;

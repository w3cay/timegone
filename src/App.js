import React, { Component } from 'react';
import TimeGone from './TimeGone';

class App extends Component {
  constructor(props) {
    super(props);
    this.title = '时光里程碑';
  }

  render() {
    return (
      <div className="app">
        <h3>光阴荏苒，日月如梭</h3>
        <TimeGone birthday="1993/11/30"></TimeGone>
      </div>
    );
  }
}

export default App;

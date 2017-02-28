import React from 'react';
import ReactDOM from 'react-dom';

import './master.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'Time Gone';
  }

  render() {
    return (
      <h1>Hello, world!</h1>
    );
  }
}

ReactDOM.render(
  App,
  document.getElementById('root')
);

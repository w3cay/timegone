import React, { Component } from 'react';

class TimeGone extends Component {
  constructor(props) {
    super(props);
    this.day = '123';
  }

  render() {
    return (
      <div className="time-gone">
        <h1>你已度过{this.day}天</h1>
      </div>
    );
  }
}

export default TimeGone;

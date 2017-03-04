import React, { Component } from 'react';

class TimeGone extends Component {
  constructor(props) {
    super(props);
    this.birthday = '1993-11-30 00:00:00';
    this.timeLost = () => {
      const seconds =
      Math.round(new Date().getTime() / 1000)
      - Math.round(new Date(this.birthday).getTime() / 1000);
      const day = Math.round(seconds / (60 * 60 * 24));
      return day;
    };
    this.getTimeLost = () => {
      return <span>{this.state.timeLost}</span>;
    }
  }



  render() {
    return (
      <div className="time-gone">
        <span>你已度过</span>
        <h1>{this.timeLost()}</h1>
        <span>个日夜</span>
      </div>
    );
  }
}

export default TimeGone;

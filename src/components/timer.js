import React, { Component } from 'react';
import moment from 'moment';

import Header from './header.js';
import Display from './display.js';
import Forms from './forms.js';
import StartButton from './start-button';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        currentTime: moment.duration(25, 'minutes'),
        baseTime: moment.duration(25, 'minutes'),
        cycle: 'setup',
        interval: null,
    };

    this.setBaseTime = this.setBaseTime.bind(this);
    this.timerStart = this.timerStart.bind(this);
    this.timerRun = this.timerRun.bind(this);
    this.timerStop = this.timerStop.bind(this);
    this.timeUp = this.timeUp.bind(this);
  }

  setBaseTime(newBaseTime) {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime,
    });
  }

  timerStart() {
    this.setState({
      cycle: 'countdown',
      interval: setInterval(this.timerRun, 1000)
    })
  }

  timerRun () {

    if (this.state.currentTime.get('hours') === 0
    && this.state.currentTime.get('minutes') === 0
    && this.state.currentTime.get('seconds') === 0) {

      this.timeUp();
      return;
    }

    const remainingTime = moment.duration(this.state.currentTime);
    remainingTime.subtract(1, 'second');

    this.setState({
      currentTime: remainingTime
    })
  }

  timerStop () {
    if (this.state.interval) {
      clearInterval(this.state.interval);
    }
    this.setState({
      cycle: 'setup',
      interval: null,
      currentTime: moment.duration(this.state.baseTime),
    });
  }

  timeUp () {
    //const audio = require('./okay.mp3');
    const alarm = new Audio(require('./okay.mp3'));
    alarm.play();

    //console.log(alarm);

  this.timerStop();
  }

  render() {
    return (
    <div className='container-fluid'>

      <Header />

      <Display
        currentTime={this.state.currentTime}
      />

      <StartButton
        cycle = {this.state.cycle}
        start = {this.timerStart}
        stop = {this.timerStop}
      />
        {
          (this.state.cycle === 'setup')
            &&
            (<Forms
              baseTime = {this.state.baseTime}
              setBaseTime = {this.setBaseTime}
            />)
        }

      </div>
  )};
}

export default Timer;

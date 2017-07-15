import React, { Component } from 'react';

class StartButton extends Component {
  constructor(props) {
    super(props);

    this.changeButton = this.changeButton.bind(this);
  }

  changeButton() {
    if (this.props.cycle === 'setup') {
      return (
        <button id='start-btn' className='btn center-block' onClick={this.props.start}> start! </button>
      );
    } else if (this.props.cycle === 'countdown') {
      return (
        <button id='stop-btn' className='btn btn-info center-block' onClick={this.props.stop}> stop! </button>
      )
    } /* else if (this.props.cycle === '' */
  }



  render () {
    return (
    <div className='row'>
      {this.changeButton()}
    </div>
  )};
}

export default StartButton;

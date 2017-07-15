import React, { Component } from 'react';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    //1:18:00 minute mark in video
  }

  handleChange(event) {
    const newBaseTime = this.props.baseTime;

    if (event.target.id === 'hours')
      newBaseTime.subtract(newBaseTime.get('hour'), 'hours').add(parseInt(event.target.value, 10), 'hours');


    if (event.target.id === 'minutes')
      newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(event.target.value, 10), 'minutes');


    if (event.target.id === 'seconds')
      newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(event.target.value, 10), 'seconds');


    this.props.setBaseTime(newBaseTime);
  }

  render() {
    return (
      <div className='row'>
      <div className='App-config col-8 col-offset-2 col-xs-offset-0'>
        <h2 className='text-center'> </h2>
          <div className='form-group'>

            <div className='col-sm-2 col-sm-offset-3 col-xs-4'>
              <label htmlFor='hours'>H</label>
              <input
                id='hours'
                className='form-control'
                type='number'
                min='0'
                size='2'
                defaultValue={this.props.baseTime.get('hours')}
                onChange={this.handleChange}
              />
            </div>

            <div className='col-sm-2 col-xs-4'>
              <label htmlFor='minutes' id='hrs-label'>M</label>
              <input id='minutes'
                className='form-control'
                type='number'
                min='0'
                size='3'
                defaultValue={this.props.baseTime.get('minutes')}
                onChange={this.handleChange}
              />
            </div>

            <div className='col-sm-2 col-xs-4'>
              <label htmlFor='seconds'>S</label>
              <input id='seconds'
              className='form-control'
              type='number'
              min='0'
              size='3'
              defaultValue={this.props.baseTime.get('seconds')}
              onChange={this.handleChange}
            />
            </div>

          </div>
        </div>
      </div>
  )};
}

export default Forms;

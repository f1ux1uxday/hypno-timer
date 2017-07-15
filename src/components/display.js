import React from 'react';

const numFormat = (num) => {
  if (num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
}

const Display = (props) => (
  <div className='row'>
    <div className='App-display col-8 col-offset-2'>
      <h2 id='digits' className='text-center'>
        {`${numFormat(props.currentTime.get('hours'))}:${numFormat(props.currentTime.get('minutes'))}:${numFormat(props.currentTime.get('seconds'))}`}
      </h2>
    </div>
  </div>
);

export default Display;

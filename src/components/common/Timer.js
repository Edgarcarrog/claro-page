import React from 'react'

const Timer = ({data, unit}) => {
  return (
    <div className="timer__item">
      <p className="data">{data < 10 ? `0${data}` : data}</p>
      <p className="unit"> {unit}</p>
    </div>
  );
}

export default Timer
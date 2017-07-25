import React from 'react';
import '../assets/alert.css';

const Alert = (props) => {
  return (
    <div className={'alert ' + (props.text ? 'alert--show' : null)}>
      {props.text}
    </div>
  )
}

export default Alert;
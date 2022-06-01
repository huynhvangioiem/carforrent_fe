import React from 'react';

function Label(props) {
  return (
    <label htmlFor={props.name}>{props.icon}{props.label}</label>
  );
}

export default Label;

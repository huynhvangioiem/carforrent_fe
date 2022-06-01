import React from 'react';

function Button(props) {
  return (
    <button type={props.type} className={`btn btn-${props.style}`}>{props.children}</button>
  );
}

export default Button;

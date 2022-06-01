import React from 'react';

function Input(props) {
  return (
    <input
      className="form-control"
      type={props.type}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
      onInput={e => props.onInput("#" + props.id)}
      onBlur={e => props.onBlur([props.validateData])}
    />
  );
}

export default Input;

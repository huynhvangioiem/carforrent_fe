import React from 'react';

function Checkbox(props) {
  return (
    <input
      type="checkbox"
      className="form-check-input"
      name={props.name}
      id={props.id}
      checked={props.checked}
      onChange={e => props.onChange(e.target.checked)}
      onInput={e => props.onInput("#" + props.id)}
      onBlur={e => props.onBlur([props.validateData])}
    />
  );
}

export default Checkbox;

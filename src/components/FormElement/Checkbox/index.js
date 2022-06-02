import React from 'react';

function Checkbox(props) {
  const property = {
    type: "checkbox",
    className: "form-check-input" + (props.customClass || ""),
    id: props.nameField || "",
    name: props.nameField || "",
    checked: props.checked || false,

    ...(props.onChange && {onChange: e => props.onChange(e.target.checked)}),
    ...(props.onInput && {onInput: e => props.onInput("#" + props.nameField)}),
    ...(props.onBlur && {onBlur: e => props.onBlur([props.validateData])}),
  }
  return (
    <>
      <input{...property}/>
    </>
  );
}

export default Checkbox;

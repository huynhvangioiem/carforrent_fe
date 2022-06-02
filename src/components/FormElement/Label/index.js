import React from 'react';
/*
*
* */
function Label(props) {
    return (
        <label htmlFor={props.for}>{props.children}</label>
);
}

export default Label;

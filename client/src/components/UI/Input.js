import React from 'react';

const Input = (props) => {
  return (
    <React.Fragment>
      <label htmlFor={props.id} className={props.labelClass}>
        {props.children}
      </label>
      <input
        id={props.id}
        type={props.type}
        required={props.required}
        className={props.inputClass}
        placeholder={props.placeholder}
      />
    </React.Fragment>
  );
};

export default Input;

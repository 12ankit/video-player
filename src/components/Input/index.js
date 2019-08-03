import React from "react";

const Input = ({
  label,
  inputClassName,
  labelClassName,
  className,
  ...inputProps
}) => (
  <div className={className}>
    <label className={labelClassName} htmlFor={inputProps.name}>
      {label}
    </label>
    <input id={inputProps.name} className={inputClassName} {...inputProps} />
  </div>
);

export default Input;

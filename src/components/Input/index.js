import React from "react";

const Input = ({
  label,
  inputClassName,
  labelClassName,
  className,
  ...inputProps
}) => (
  <div className={className} style={{ display: "inline-block", width: 300 }}>
    <label
      style={{ display: "block", paddingBottom: 10, fontSize: 14 }}
      className={labelClassName}
      htmlFor={inputProps.name}
    >
      {label}
    </label>
    <input id={inputProps.name} className={inputClassName} {...inputProps} />
  </div>
);

export default Input;

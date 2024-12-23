import React from "react";

export const AppLabel = ({
  labelText,
  labelType,
  labelName,
  labelPlaceholder,
  labelError,
}) => {
  return (
    <label className="input-wrapper" htmlFor={labelName}>
      {labelText}
      <input
        required
        type={labelType}
        name={labelName}
        id={labelName}
        placeholder={labelPlaceholder}
      />
      <span className="error-message" id={`${labelName}-error`}>
        {labelError}
      </span>
    </label>
  );
};

import React from "react";
import { ContainerLabel, Error } from "./styled";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <ContainerLabel>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete="off"
      />
      <Error>{error}</Error>
    </ContainerLabel>
  );
};

export default Input;

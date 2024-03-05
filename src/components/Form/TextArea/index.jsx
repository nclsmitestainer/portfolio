import React from "react";
import { ContainerTextArea, Error } from "./styled";

const TextArea = ({
  label,
  name,
  value,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <ContainerTextArea>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        cols="30"
        rows="10"
      ></textarea>
      <Error>{error}</Error>
    </ContainerTextArea>
  );
};

export default TextArea;

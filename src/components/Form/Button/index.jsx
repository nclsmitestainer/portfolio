import React from "react";
import { ButtonStyle } from "./styled";

const Button = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;

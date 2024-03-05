import React from "react";
import PropTypes from "prop-types";
import { DescStyle } from "./styled";

const Description = (props) => {
  return <DescStyle>{props.children}</DescStyle>;
};

export default Description;

Description.propTypes = {
  children: PropTypes.string.isRequired,
};

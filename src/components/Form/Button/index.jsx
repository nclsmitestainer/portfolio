import PropTypes from "prop-types";
import { ButtonStyle } from "./styled";

const Button = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;

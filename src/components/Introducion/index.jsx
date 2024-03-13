import PropTypes from "prop-types";
import { Title, Subtitle } from "./styled";

const Introducion = (props) => {
  return (
    <div style={{ marginBottom: 32 }}>
      <div>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
      </div>
    </div>
  );
};

Introducion.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Introducion;

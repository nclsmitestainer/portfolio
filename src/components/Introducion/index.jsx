import React from "react";
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

export default Introducion;

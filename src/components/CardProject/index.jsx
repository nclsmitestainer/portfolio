import React from "react";
import PropTypes from "prop-types";
import { ProjectCard, PreviewProject } from "./styled";

const CardProject = (props) => {
  return (
    <ProjectCard href={props.link} target="_blank" rel="noreferrer">
      <PreviewProject src={props.preview} alt={props.name} rel="noreferrer" />
      <div>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </div>
      <ul>
        {props.techs.map((tech, key) => (
          <li title={tech} key={key}>
            <img width={20} height={20} src={`/${tech}.svg`} alt={tech} />
          </li>
        ))}
      </ul>
    </ProjectCard>
  );
};

CardProject.propTypes = {
  link: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techs: PropTypes.array.isRequired,
};

export default CardProject;

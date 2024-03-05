import React from "react";
import skills from "../../data/skills.json";
import softskills from "../../data/softskills.json";

import {
  Buttons,
  Technology,
  SoftSkills,
  ContainerProgress,
  ProgressTitle,
} from "./styled";

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState("frontend");

  function handleClick(e) {
    setActiveTab(e.target.value);
    const newButton = e.target;
    const oldButton = document.querySelector(".activeButton");
    if (oldButton === null) {
      newButton.classList.add("activeButton");
    } else {
      oldButton.classList.remove("activeButton");
      newButton.classList.add("activeButton");
    }
  }

  return (
    <>
      <Buttons>
        <button
          className={"activeButton"}
          onClick={handleClick}
          value={"frontend"}
        >
          Frontend
        </button>

        <button onClick={handleClick} value={"backend"}>
          Backend
        </button>
      </Buttons>

      <Technology>
        {skills.map((skill) => {
          if (skill.type.includes(activeTab)) {
            return (
              <div key={skill.id}>
                <img
                  width="42"
                  height="42"
                  key={skill.id}
                  src={skill.src}
                  alt={skill.title}
                />
              </div>
            );
          }
        })}
      </Technology>

      <SoftSkills>
        <h3>Minhas Soft-Skills</h3>
        <ContainerProgress>
          {softskills.map((soft) => {
            return (
              <div key={soft.id}>
                <ProgressTitle>
                  <span>{soft.title}</span>
                  <span>{`${soft.percentage}%`}</span>
                </ProgressTitle>
                <div>
                  <progress value={soft.percentage} max={100}></progress>
                </div>
              </div>
            );
          })}
        </ContainerProgress>
      </SoftSkills>
    </>
  );
};
export default Tabs;

import React from "react";
import Introducion from "../../components/Introducion";
import {
  Technology,
  SoftSkills,
  ContainerProgress,
  ProgressTitle,
} from "./styled";
import Filters from "../../components/Tabs/Filters";
import skills from "../../data/skills.json";
import softskills from "../../data/softskills.json";

const Skills = () => {
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
      <Introducion
        title="Minhas Habilidades"
        subtitle="As tecnologias que eu trabalho, estudo e minhas soft-skills"
      />
      <div className="buttons">
        <Filters state={activeTab} onClick={handleClick} value="frontend">
          Frontend
        </Filters>
        <Filters onClick={handleClick} value="backend">
          Backend
        </Filters>
      </div>

      <Technology>
        {skills.map(
          (skill) =>
            skill.type.includes(activeTab) && (
              <div key={skill.id}>
                <img
                  width="42"
                  height="42"
                  key={skill.id}
                  src={skill.src}
                  alt={skill.title}
                />
              </div>
            ),
        )}
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

export default Skills;

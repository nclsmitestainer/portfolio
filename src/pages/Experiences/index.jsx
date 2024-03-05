import React from "react";
import { ExpCard, ContainerDetails, Exp } from "./styled";
import Introducion from "../../components/Introducion";
import Filters from "../../components/Tabs/Filters";
import experiences from "../../data/experiences.json";

const Experiences = () => {
  const [activeTab, setActiveTab] = React.useState("professional");

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
        title="Experiências"
        subtitle="Minhas experiências profissionais e acadêmicas"
      />

      <div className="buttons">
        <Filters state={activeTab} onClick={handleClick} value="professional">
          Profissional
        </Filters>
        <Filters onClick={handleClick} value="academic">
          Acadêmico
        </Filters>
      </div>

      <Exp>
        {experiences.map((exp) => {
          if (exp.type === activeTab) {
            return (
              <ExpCard key={exp.id}>
                <ContainerDetails>
                  <div>
                    <h3>{exp.title}</h3>
                    <h4>{exp.subtitle}</h4>
                    <span>{exp.date}</span>
                  </div>
                </ContainerDetails>
                <p>{exp.description}</p>
              </ExpCard>
            );
          }
        })}
      </Exp>
    </>
  );
};

export default Experiences;

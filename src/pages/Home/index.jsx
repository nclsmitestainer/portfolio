import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  PreviewProject,
  ProjectCard,
  ProjectContainer,
  Recents,
  ButtonRecents,
} from "./styled";
import Introducion from "../../components/Introducion";
import Description from "../../components/Description";
import CardProject from "../../components/CardProject";

const Home = () => {
  return (
    <>
      <div>
        <Introducion
          title="Soluções Digitais"
          subtitle="Desenvolvimento de Sistemas e Sites"
        />
        <Description>
          Criando interfaces digitais modernas que conectam o seu negócio ao
          mundo. A combinação de UI / UX Design e meu Desenvolvimento Front-End
          faz o seu site vender. Já passou da hora de subir o seu nível, o seu
          negócio merece o melhor.
        </Description>
      </div>
      <Recents>
        <ButtonRecents>
          <h3>Projetos Recentes</h3>
          <Link to="/projects">
            Ver todos <FaArrowRightLong />
          </Link>
        </ButtonRecents>
        <ProjectContainer>
          <CardProject
            link={"https://github.com/nclsmitestainer/dogs"}
            preview={"/doggram.png"}
            name={"Doggram"}
            description={"A rede social perfeita para dogs."}
            techs={["vite", "javascript", "react"]}
          />

          <CardProject
            link={"https://github.com/nclsmitestainer/bikcraft"}
            preview={"/bikcraft.png"}
            name={"Bikcraft"}
            description={
              "A loja de bicicletas sob medida na maior modernidade."
            }
            techs={["html", "css", "javascript"]}
          />
        </ProjectContainer>
      </Recents>
    </>
  );
};

export default Home;

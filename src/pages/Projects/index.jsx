import React from "react";
import CardProject from "../../components/CardProject";
import { ProjectContainer, ContainerContent } from "./styled";
import Introducion from "../../components/Introducion";
import Description from "../../components/Description";

const Projects = () => {
  return (
    <>
      <div>
        <Introducion
          title="Meus projetos"
          subtitle="Trabalhos freelancers, pessoais & estudos"
        />
        <Description>
          Alguns projetos os quais tive a oportunidade de atuar e projetos
          pessoas que gosto de desenvolver para por em pratica meus aprendizados
          e meus conhecimentos.
        </Description>
      </div>

      <ContainerContent>
        <ProjectContainer>
          <CardProject
            link={"https://github.com/mitestainer7?tab=repositories"}
            preview={"/doggram.png"}
            name={"Doggram"}
            description={
              "Uma rede social feita para cachorros, poste foto do seu dog e interaja com diversos usuários em uma rede social onde existem apenas fotos de cachorros."
            }
            techs={["vite", "javascript", "react"]}
          />

          <CardProject
            link={"https://github.com/mitestainer7?tab=repositories"}
            preview={"/bikcraft.png"}
            name={"BikCraft"}
            description={
              "A bicicleta perfeita para você, feita com carinho desde cada peça até o site, com componentes modernos e intuitivos para melhorar ainda mais a sua experiência."
            }
            techs={["html", "css", "javascript", "figma"]}
          />

          <CardProject
            link={"https://github.com/mitestainer7?tab=repositories"}
            preview={"/doggram.png"}
            name={"Api Escola"}
            description={
              "Uma api feita pensado em uma escola, com CRUD para alunos."
            }
            techs={["react", "styled-components"]}
          />

          <CardProject
            link={"https://github.com/mitestainer7?tab=repositories"}
            preview={"/doggram.png"}
            name={"Mongo Agenda"}
            description={
              "A agenda de contatos que você vai amar e vai ainda facilitar a sua vida."
            }
            techs={["react", "node", "express", "javascript", "sass"]}
          />
        </ProjectContainer>
      </ContainerContent>
    </>
  );
};

export default Projects;

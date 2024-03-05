import React from "react";
import Introducion from "../../components/Introducion";
import { IoLogoInstagram } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import Eye from "../../assets/eye.svg?react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import {
  Download,
  MyPicture,
  Container,
  ContainerContent,
  Content,
  Contacts,
} from "./styled";

const About = () => {
  return (
    <>
      <Introducion title={"Sobre mim"} subtitle={"Desenvolvedor Front-End"} />
      <div>
        <Container>
          <ContainerContent>
            <Content>
              <div>
                <p>
                  Trabalhando como Desenvolvedor Front-End, venho adquirindo
                  diversas experiências em uma variedades de projetos.
                  Atualmente estou no Desenvolvimento Web, utilizando React e
                  Styled-Components para o Frontend e assim entregando o melhor
                  site para sua empresa, estou focado em aprimorar minhas
                  habilidades no desenvolvimento Back-End em C# e Python. Minha
                  especialidade é criar sistemas funcionais e interfaces
                  atraentes e modernas que melhoram a experiência do usuário.
                  Estou no mercado a tempo suficiente para alavancar a sua
                  empresa e levar sua experiência digital ao próximo nível.
                </p>
                <Download
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1DLNpRIwL18gogsibtAM0ltH12JhaPdP7/view?usp=sharing",
                    )
                  }
                >
                  <Eye />
                  Visualizar C.V
                </Download>
              </div>
              <MyPicture
                src="/src/assets/profile.png"
                alt="author"
                width="290"
                height="345"
              />
            </Content>
          </ContainerContent>
          <Contacts>
            <h3>Me encontre aqui</h3>
            <div>
              <a
                target="_blank"
                href="https://github.com/nclsmitestainer"
                rel="noreferrer"
              >
                <FiGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/nicolas-mitestainer/"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                target="_blank"
                href="https://instagram.com/7mitestainer"
                rel="noreferrer"
              >
                <IoLogoInstagram />
              </a>
              <a
                target="_blank"
                href="https://wa.me/5519998554441?text=Ol%C3%A1%2C+me+interessei+pelo+seu+trabalho."
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </Contacts>
        </Container>
      </div>
    </>
  );
};

export default About;

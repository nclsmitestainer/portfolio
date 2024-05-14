import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { ProjectContainer, Recents, ButtonRecents } from './styled';
import Introducion from '../../components/Introducion';
import Description from '../../components/Description';
import CardProject from '../../components/CardProject';

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
            link={'https://github.com/nclsmitestainer/nickcine'}
            preview={'/nickcine.png'}
            name={'NickCine!'}
            description={'O catalogo de filmes que conversa com você.'}
            techs={['react', 'tailwind']}
          />
          <CardProject
            link={'https://github.com/nclsmitestainer/dogs'}
            preview={'/doggram.png'}
            name={'Doggram'}
            description={'A rede social perfeita para dogs.'}
            techs={['vite', 'javascript', 'react']}
          />
        </ProjectContainer>
      </Recents>
    </>
  );
};

export default Home;

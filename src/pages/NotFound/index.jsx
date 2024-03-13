import { Container, Content } from "./styled.jsx";

const NotFound = () => {
  return (
    <Container>
      <Content>
        <h1>404</h1>
        <p>Página não encontrada. :/</p>
        <span>Desculpe, essa página não existe.</span>
      </Content>
    </Container>
  );
};

export default NotFound;

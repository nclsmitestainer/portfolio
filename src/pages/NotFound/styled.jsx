import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: rgba(50, 100, 200, 1);
  }
  p {
    font-size: 3rem;
    font-weight: 500;
  }
  span {
    font-size: 2rem;
    font-weight: 400;
  }
`;

import styled from "styled-components";

export const ContainerContent = styled.div`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(50, 100, 200, 1);
  margin-top: calc(1.25rem * calc(1 - 0));
  margin-bottom: calc(1.25rem * 0);
`;

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  place-items: center;
`;

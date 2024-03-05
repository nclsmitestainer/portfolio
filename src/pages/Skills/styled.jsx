import styled from "styled-components";

export const ContainerContent = styled.div`
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
`;

export const Technology = styled.div`
  display: grid;
  gap: 1rem;
  border-bottom-width: 1px;
  border-color: rgba(163, 163, 163, 0.5);
  padding-top: 2rem;
  padding-bottom: 2rem;
  place-items: start;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  div {
    display: flex;
    width: 5rem;
    height: 5rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem;
    border-width: 1px;
    border-color: rgba(64, 64, 64, 0.5);
    background-color: rgb(23 23 23/1);
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const SoftSkills = styled.div`
  margin-top: calc(1.25rem * calc(1 - 0));
  margin-bottom: calc(1.25rem * 0);
  h3 {
    font-size: 1.2rem;
    line-height: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: 0.7px;
  }
`;

export const ContainerProgress = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding-bottom: 2rem;
  gap: 2rem;
`;

export const ProgressTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
`;

import styled from "styled-components";

export const ProjectCard = styled.a`
  padding: 0.75rem;
  border: 1px solid rgba(64, 64, 64, 0.5);
  border-radius: 0.8rem;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  color: inherit;
  height: 23rem;
  transition: 0.3s;
  &:hover {
    background: rgba(64, 64, 64, 0.3);
    border-color: rgba(50, 100, 200, 1);
  }
  div {
    margin-top: 1rem;
    margin-bottom: 1rem;
    h4 {
      font-size: 1.3rem;
      line-height: 1.8rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 400;
      color: rgb(212 212 212/1);
      margin-top: calc(0.5rem * calc(1 - 0));
      margin-bottom: calc(0.5rem * 0);
    }
  }
  ul {
    gap: 0.25rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
    margin-bottom: 0;
    li {
      padding: 0.25rem;
    }
  }
`;

export const PreviewProject = styled.img`
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  width: 100%;
  max-width: 100%;
  height: 12rem;
  display: block;
  cursor: pointer;
`;

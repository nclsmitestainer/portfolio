import styled from "styled-components";

export const Recents = styled.div`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(50, 100, 200, 1);
  margin-top: calc(1.25rem * calc(1 - 0));
  margin-bottom: calc(1.25rem * 0);
`;

export const ButtonRecents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.25rem;
  h3 {
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.25rem;
    font-weight: 600;
    letter-spacing: 0.6px;
  }
  a {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-weight: 500;
    transition: all 0.3s;
    &:hover {
      color: rgba(39, 52, 173, 1);
      svg {
        fill: #fff;
      }
    }
    svg {
      transition: all 0.3s;
      fill: rgba(39, 52, 173, 1);
    }
  }
`;

export const ProjectCard = styled.a`
  padding: 0.75rem;
  border: 1px solid rgba(64, 64, 64, 0.5);
  border-radius: 0.8rem;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  color: inherit;
  height: 23rem;
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
    margin-top: 1.5rem;
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

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  place-items: center;
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

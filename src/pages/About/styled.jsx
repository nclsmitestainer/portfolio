import styled from "styled-components";

export const Container = styled.div`
  margin-top: calc(2rem * calc(1 - 0));
  margin-bottom: calc(2rem * 0);
`;

export const ContainerContent = styled.div`
  margin-top: calc(1.5rem * calc(1 - 1));
  margin-bottom: calc(1.5rem * 1);
  padding-bottom: 2rem;
  border-bottom-width: 1px;
  border-color: rgba(50, 100, 200, 1);
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  p {
    font-size: 1.15rem;
    font-weight: 500;
    max-width: 32rem;
    margin-bottom: 2rem;
    color: rgb(212 212 212/1);
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0;
  }
`;

export const Download = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(163 163 163 / 1);
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  color: rgba(163 163 163 / 1);
  background: transparent;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition-property: all;
  transition-duration: 0.15s;
  svg {
    fill: #a3a3a3;
    width: 16px;
    height: 16px;
    transition-property: all;
    transition-duration: 0.15s;
  }
  &:hover {
    background-color: rgba(64, 64, 64, 0.5);
    color: rgb(255 255 255/1);
    svg {
      fill: #fff;
    }
  }
`;

export const MyPicture = styled.img`
  width: 20rem;
  margin-top: -2.5rem;
`;

export const Contacts = styled.div`
  margin-top: calc(2rem * calc(1 - 0));
  margin-bottom: calc(2rem * 0);
  gap: 1rem;
  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: rgb(255 255 255/1);
    margin-bottom: 1rem;
    letter-spacing: 0.6px;
  }
  div {
    display: flex;
    gap: 1rem;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 0.4rem;
    border-width: 1px;
    border-color: rgb(64 64 64/1);
    font-size: 1.25rem;
    line-height: 1.75rem;
    color: rgb(163 163 163/1);
    transition-property: all;
    transition-duration: 0.15s;
    cursor: pointer;
    &:hover {
      color: rgb(255 255 255/1);
      background: rgba(64, 64, 64, 0.5);
    }
  }
`;

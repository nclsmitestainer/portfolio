import styled from "styled-components";

export const SocialMedia = styled.div`
  border-bottom-width: 1px;
  border-color: rgba(50, 100, 200, 1);
  padding-bottom: 2rem;
  h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    color: rgb(255 255 255/1);
    margin-bottom: 1rem;
    letter-spacing: 0.8px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    a {
      border-radius: 0.5rem;
      border-width: 1px;
      border-color: rgb(163 163 163/1);
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 700;
      color: rgb(163 163 163/1);
      transition-property: all;
      transition-duration: 0.15s;
      transition-delay: 100ms;
      &:hover {
        color: rgb(255 255 255/1);
        background: rgba(64, 64, 64, 0.5);
      }
    }
  }
`;

export const ContainerForm = styled.div`
  margin-top: calc(1.25rem * calc(1 - 0));
  margin-bottom: calc(1.25rem * 0);
  h3 {
    margin-bottom: 1rem;
    font-weight: 700;
    color: rgb(255 255 255/1);
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  p {
    font-weight: 400;
    color: rgb(212 212 212/1);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 20rem;
  margin-top: calc(2rem * calc(1 - 0));
  margin-bottom: calc(2rem * 0);
`;

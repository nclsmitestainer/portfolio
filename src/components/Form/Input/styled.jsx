import styled from "styled-components";

export const ContainerLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  label {
    font-weight: 700;
    color: rgb(212 212 212/1);
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  input {
    border-radius: 0.4rem;
    border-width: 1px;
    border-color: rgba(163, 163, 163, 0.5);
    background-color: rgba(38, 38, 38, 0.3);
    padding: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgb(212 212 212/1);
    &:focus {
      outline: none;
      border-color: rgba(50, 100, 200, 0.7);
      background: rgba(55, 55, 55, 0.7);
      box-shadow: 0 0 0 2px rgba(0, 40, 120, 0.6);
    }
  }
`;

export const Error = styled.p`
  color: #ff0f01 !important;
  font-size: 1rem;
  line-height: 1.25rem;
`;

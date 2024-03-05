import styled from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 0.125rem;
  background-color: rgb(212 212 212/1);
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  color: rgb(38 38 38/1);
  transition-property: all;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1.5px solid transparent;
  &:hover {
    color: rgb(212 212 212/1);
    background-color: rgb(38 38 38/1);
    border: 1px solid rgb(212 212 212/1);
  }
`;

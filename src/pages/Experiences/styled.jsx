import styled from "styled-components";

export const Exp = styled.div`
  margin-top: calc(1.25rem * calc(1 - 0));
  margin-bottom: calc(1.25rem * 0);
`;

export const ExpCard = styled.article`
  display: flex;
  gap: 2rem;
  flex-wrap: nowrap;
  width: 100%;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    padding-bottom: 2rem;
    color: rgb(229 229 229/1);
  }
`;

export const ContainerDetails = styled.div`
  display: flex;
  position: relative;
  width: 15rem;
  flex-wrap: wrap;
  div {
    position: relative;
    width: 15rem;
    padding-right: 2rem;
    padding-bottom: 3rem;
    border-right-width: 1px;
    border-color: rgba(163, 163, 163, 0.5);
    @media (max-width: 768px) {
      border: none;
      padding-bottom: 0;
    }
    &::before {
      content: "";
      position: absolute;
      right: -0.6rem;
      top: 0;
      width: 1rem;
      height: 1rem;
      border: 1.5px solid rgba(39, 52, 173, 1);
      border-radius: 9999px;
      background-color: rgb(0 0 0/1);
      @media (max-width: 768px) {
        display: none;
      }
    }
    h3 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2rem;
    }
    h4 {
      font-weight: 700;
      color: rgba(39, 52, 173, 1);
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
    span {
      font-size: 0.75rem;
      line-height: 1rem;
      color: rgb(163 163 163/1);
    }
  }
`;

import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: none;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: max(calc((100% - 96%) / 2), 1rem)
    max(calc((100% - 90rem) / 2), 1.4rem);
  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const IconMenu = styled.div`
  font-size: 2.25rem;
  line-height: 2rem;
`;

export const Nav = styled.nav`
  position: relative;
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const Menu = styled.ul`
  position: absolute;
  display: none;
  border-radius: 1rem;
  top: 3rem;
  right: 0.4rem;
  list-style: none;
  border-width: 1px;
  border-color: rgb(64 64 64/1);
  background-color: rgb(23 23 23/1);
  padding: 0;
  margin: 0;
  z-index: 20;
`;

export const MenuItem = styled.li`
  a {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    color: rgba(255, 255, 255, 0.6);
    &:hover {
      color: #fff;
      background: rgba(64, 64, 64, 0.3);
      border-color: rgba(64, 64, 64, 1);
      transition: 0.3s;
    }
  }
`;

export const OutSideClick = styled.div`
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  @media (min-width: 1024px) {
    display: none;
  }
`;

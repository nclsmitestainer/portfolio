import styled from "styled-components";

export const Nav = styled.nav`
  border-bottom: 1px solid rgba(50, 100, 200, 1);
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 8px;
    color: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    gap: 10px;
    text-transform: capitalize;
    font-size: 1rem;
    border: 1.5px solid transparent;
    &:hover {
      color: #fff;
      background: rgba(64, 64, 64, 0.3);
      border-color: rgba(64, 64, 64, 1);
      transition: 0.3s;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border-width: 1px;
  border-color: rgba(50, 100, 200, 1);
  width: 5rem;
  height: 5rem;
  img {
    width: 4rem;
    height: 4rem;
    /* filter: drop-shadow(0 0 3px lime); */
  }
`;

export const ListItem = styled.li`
  align-items: center;
  margin: 5px 0;
`;

export const Copyright = styled.span`
  font-size: 0.8rem;
  line-height: 1rem;
  padding: 2px 0;
`;

export const Subtitle = styled.div`
  border-bottom: 1px solid rgba(50, 100, 200, 1);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding-bottom: 0.8rem;
  span {
    display: block;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    letter-spacing: 1px;
  }
  a {
    text-decoration: none;
    color: inherit;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    letter-spacing: 0.7px;
  }
  .function {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
    letter-spacing: 1.3px;
  }
`;

export const AsideBar = styled.aside`
  width: 19.5rem;
`;

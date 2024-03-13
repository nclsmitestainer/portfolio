import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { LuClipboardList } from "react-icons/lu";
import { SlGraph } from "react-icons/sl";
import { PiPaperPlaneTilt } from "react-icons/pi";

import {
  Nav,
  ListItem,
  Copyright,
  Subtitle,
  AsideBar,
  Profile,
} from "./styled";

const Aside = () => {
  return (
    <AsideBar>
      <div>
        <Profile></Profile>

        <Subtitle>
          <div>
            <span>Nicolas Mitestainer</span>
            <a
              target="_blank"
              href="https://github.com/nclsmitestainer"
              rel="noreferrer"
            >
              @nclsmitestainer
            </a>
          </div>
          <span className="function">Desenvolvedor Front-End</span>
        </Subtitle>
      </div>

      <Nav>
        <ul>
          <ListItem>
            <NavLink to="/">
              <IoHomeOutline />
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/about">
              <FaRegUserCircle />
              Sobre
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/experiences">
              <SlGraph />
              Experiências
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/skills">
              <IoIosStarOutline />
              Skills
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/projects">
              <LuClipboardList />
              Projetos
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/contact">
              <PiPaperPlaneTilt />
              Contato
            </NavLink>
          </ListItem>
        </ul>
      </Nav>

      <Copyright>© 2024 - Nicolas Mitestainer Gomes</Copyright>
    </AsideBar>
  );
};

export default Aside;

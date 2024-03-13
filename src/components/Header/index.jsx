import React from "react";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosStarOutline, IoMdClose } from "react-icons/io";
import { LuClipboardList } from "react-icons/lu";
import { SlGraph } from "react-icons/sl";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
  Nav,
  Menu,
  MenuItem,
  HeaderStyle,
  IconMenu,
  OutSideClick,
} from "./styled";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <HeaderStyle>
        <div></div>
        <Nav onClick={() => setOpen(!open)}>
          <IconMenu>
            {open ? (
              <IoMdClose width={36} height={36} />
            ) : (
              <HiOutlineMenuAlt1 width={36} height={36} />
            )}
          </IconMenu>
          <Menu className={open ? "open" : ""}>
            <MenuItem>
              <NavLink to="/">
                <IoHomeOutline />
                Home
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/about">
                <FaRegUserCircle />
                Sobre
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/experiences">
                <SlGraph />
                Experiências
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/skills">
                <IoIosStarOutline />
                Skills
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/projects">
                <LuClipboardList />
                Projetos
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/contact">
                <PiPaperPlaneTilt />
                Contato
              </NavLink>
            </MenuItem>
          </Menu>
        </Nav>
      </HeaderStyle>
      <OutSideClick
        className={open ? "open" : ""}
        onClick={() => setOpen(!open)}
      ></OutSideClick>
    </>
  );
};

export default Header;

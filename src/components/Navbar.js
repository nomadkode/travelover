import { useState, useEffect, memo } from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/menuData";
import { Button } from "./Button";
import Bars from "../assets/bars.svg";

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  background: ${({ navbar }) => (navbar ? "#0a1931" : "transparent")};
`;

const NavLink = css`
  color: #fff;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-size: 1.2rem;
  font-weight: bold;
  font-style: italic;

  &:hover {
    color: #ba135d;
  }
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}

  transition: 0.3s;
  &:hover {
    color: #ba135d;
    transform: translateY(-5px);
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Navbar = memo(({ toggle }) => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => void setNavbar(window.scrollY >= 100);

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <Nav navbar={navbar}>
      <Logo to="/">TRAVELOVER</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.Link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
});

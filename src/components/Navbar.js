import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menuData';
import { Button } from './Button';

const Nav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  background: #000;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled.i`
  color: #f1f1f1;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">travelover</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => {
          return (
            <NavMenuLinks to={item.Link} key={index}>
              {item.title}
            </NavMenuLinks>
          );
        })}
      </NavMenu>
      <NavBtn>
        <Button to="/contact">Contact Us</Button>
      </NavBtn>
    </Nav>
  );
};

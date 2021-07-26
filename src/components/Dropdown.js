import { memo } from "react";

import styled from "styled-components";
import { menuData } from "../data/menuData";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ openIcon }) => (openIcon ? "1" : "0")};
  top: ${({ openIcon }) => (openIcon ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #f1f1f1;
`;
const DropdownWrap = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 488px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f1f1f1;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #ba135d;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dropdown = memo(({ openIcon, toggle }) => (
  <DropdownContainer openIcon={openIcon} onClick={toggle}>
    <Icon onClick={toggle}>
      <CloseIcon />
    </Icon>
    <DropdownWrap>
      <DropdownMenu>
        {menuData.map((item, index) => (
          <DropdownLink to={item.Link} key={index}>
            {item.title}
          </DropdownLink>
        ))}
      </DropdownMenu>
      <BtnWrap>
        <Button primary="true" round="true" to="/contact">
          Contact Us
        </Button>
      </BtnWrap>
    </DropdownWrap>
  </DropdownContainer>
));

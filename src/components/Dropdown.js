import styled from 'styled-components';
import { menuData } from '../data/menuData';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #ba135d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: 1;
  top: 0;
`;

const Icon = styled.div``;
const CloseIcon = styled(FaTimes)``;
const DropdownWrap = styled.div``;
const DropdownMenu = styled.div``;
const DropdownLink = styled(Link)``;
const BtnWrap = styled.div``;

export const Dropdown = () => {
  return (
    <DropdownContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <DropdownWrap>
        <DropdownMenu>
          {menuData.map((item, index) => {
            return (
              <DropdownLink to={item.link} key={index}>
                {item.title}
              </DropdownLink>
            );
          })}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrap>
    </DropdownContainer>
  );
};

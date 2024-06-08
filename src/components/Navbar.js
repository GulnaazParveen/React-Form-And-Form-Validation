import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
`;

const NavbarContainer = styled.nav`
  background-color: #ff4081;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  flex-grow: 1;
  color: white;
  font-size: 24px;
  margin: 0;
`;

const NavButton = styled(NavLink)`
  color: white;
  text-transform: none;
  text-decoration: none;
  margin-left: 16px;
  padding: 8px 16px;
  background-color: ${({ isActive }) => (isActive ? '#6d1b7b' : 'transparent')};
  &:hover {
    background-color: #6d1b7b;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <NavbarContainer>
        <Title>Fashion-Shop</Title>
        <NavButton to='/' isActive={({ isActive }) => isActive}>
          Home
        </NavButton>
        <NavButton to='/contact' isActive={({ isActive }) => isActive}>
          Contact
        </NavButton>
        <NavButton to='/login' isActive={({ isActive }) => isActive}>
          Login/Registration
        </NavButton>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;

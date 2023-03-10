import React from 'react';

import { Container, Nav, Linke } from './styles';
//import imgLogo from 'src/assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Linke href='/#initial'>HOME</Linke>
        <Linke href='#about'>ABOUT</Linke>
        <Linke href='#projects'>PROJECTS</Linke>
        <Linke href='#contact'>CONTACT</Linke>
      </Nav>
    </Container>
  );
};

export default Header;

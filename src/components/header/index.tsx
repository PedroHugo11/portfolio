import React from 'react';

import { Container, Nav, Link } from './styles';
//import imgLogo from 'src/assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Link href="#initial">HOME</Link>
        <Link href="#about">ABOUT</Link>
        <Link href="#services">SERVICES</Link>
        <Link href="#projects">PROJECTS</Link>
        <Link href="#contact">CONTACT</Link>
      </Nav>
    </Container>
  );
};

export default Header;

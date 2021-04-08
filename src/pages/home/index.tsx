import React from 'react';

import { Container } from './styles';
import Header from 'src/components/header';
import Initial from 'src/scenes/initial';
import About from 'src/scenes/about';
import Education from 'src/scenes/education';
import Services from 'src/scenes/services';
import Project from 'src/scenes/project';
import Contact from 'src/scenes/contact';

const Home: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Initial></Initial>
      <About></About>
      <Education></Education>
      <Services></Services>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
};

export default Home;

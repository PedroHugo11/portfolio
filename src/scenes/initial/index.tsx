import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import BgHome from 'src/assets/intro-bg.jpg';
import { Center } from 'src/styles/global';

import {
  Container,
  BackgroundHome,
  TitleHome1,
  TitleHome2,
  ParagraphCentralHome,
  IntroOverlay,
  ButtonHome,
  IntroSocial,
  IntroSocialLi,
  HrefA,
  ButtonLink,
} from './styles';
import { Link } from 'react-router-dom';

const Initial: React.FC = () => {
  return (
    <Container id="initial">
      <IntroOverlay></IntroOverlay>
      <BackgroundHome></BackgroundHome> 
        <Center>
          <TitleHome1>PORTFOLIO</TitleHome1>
          <TitleHome2>PEDRO HUGO</TitleHome2>
          <ParagraphCentralHome>|  Front-End Developer  |   UI/UX Designer  |</ParagraphCentralHome>
          <ButtonLink href="/#about"><ButtonHome>Learn More</ButtonHome></ButtonLink>
        </Center>
        <IntroSocial>
          <IntroSocialLi>
            <HrefA target='_blank' href='https://github.com/PedroHugo11'><FontAwesomeIcon icon={faGithub}/></HrefA>
          </IntroSocialLi>
            <IntroSocialLi>
              <HrefA target='_blank' href='https://www.linkedin.com/in/pedrohugo11/'><FontAwesomeIcon icon={faLinkedin}/></HrefA>              
            </IntroSocialLi>
            <IntroSocialLi>
              <HrefA target='_blank' href='https://www.instagram.com/happy.file/'><FontAwesomeIcon icon={faInstagram}/></HrefA>
            </IntroSocialLi>           
        </IntroSocial>
    </Container>
  );
};

export default Initial;

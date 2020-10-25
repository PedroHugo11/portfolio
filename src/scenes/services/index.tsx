import React from 'react';

import ImgJs from 'src/assets/services/js.png';
import ImgJava from 'src/assets/services/java.png';
import ImgEslint from 'src/assets/services/eslint.png';
import ImgFigma from 'src/assets/services/figma.png';
import ImgGit from 'src/assets/services/git.png';
import ImgHtml from 'src/assets/services/html.png';
import ImgIllustrator from 'src/assets/services/illustrator.png';
import ImgPhotoshop from 'src/assets/services/photoshop.png';
import ImgPhp from 'src/assets/services/php.png';
import ImgReact from 'src/assets/services/react.png';
import ImgPython from 'src/assets/services/python.png';
import ImgCss from 'src/assets/services/css.png';
import ImgMysql from 'src/assets/services/mysql.png';

import {
  Container,
  ContentContainer,
  TitleContainer,
  SubTitle,
  ImageContainer,
  ImageService,
} from './styles';

// import { Container } from './styles';

const Services: React.FC = () => {
  return (
    <Container id="services">
      <ContentContainer>
        <TitleContainer>Services</TitleContainer>
        <SubTitle>
          Since 2014 learning and working with programming in different
          languages ​​and projects, since 2017 i have focused on Web
          Programming, the Front-end being my best specialty.
        </SubTitle>
        <ImageContainer>
          <ImageService src={ImgPhp} />
          <ImageService src={ImgReact} />
          <ImageService src={ImgJs} />
          <ImageService src={ImgMysql} />
          <ImageService src={ImgPython} />
          <ImageService src={ImgJava} />
          <ImageService src={ImgHtml} />
          <ImageService src={ImgCss} />
          <ImageService src={ImgEslint} />
          <ImageService src={ImgPhotoshop} />
          <ImageService src={ImgIllustrator} />
          <ImageService src={ImgFigma} />
          <ImageService src={ImgGit} />
        </ImageContainer>
      </ContentContainer>
    </Container>
  );
};

export default Services;

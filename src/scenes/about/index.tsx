import React from 'react';
import ImgAbout from 'src/assets/download.png';

import {
  Container,
  ContentContainer,
  TitleContainer,
  ParagraphContainer,
  HrefParagraph,
  ImageAbout,
  ContainerIntroAbout,
  TitleAbout,
} from './styles';

const About: React.FC = () => {
  return (
    <Container id="about">
      <ContentContainer>
        <TitleContainer>ABOUT</TitleContainer>
        <ContainerIntroAbout>
          <ImageAbout src={ImgAbout} />
          <TitleAbout>
            Hello World! I am Pedro Hugo, a Front-End Developer with
            experience in PHP, HTML, CSS, JS technologies and graphic designer.
          </TitleAbout>
        </ContainerIntroAbout>
 
        <ParagraphContainer>
          Hello World! My full name is Pedro Hugo da Silva Freire, I am 21 years old, I was
          born and raised in a small town in the interior of Rio Grande do Norte
          called Santo Antônio, I left there when I was 18 to study in Natal,
          the state capital, where I currently live.
          <br />
          <br />
          For 7 years learning various languages ​​and working on projects, teams and in 2020 with the pandemic, venturing into a venture in a small advertising agency, developing my skills as a graphic designer.
          <br />
          <br />
        </ParagraphContainer>
      </ContentContainer>
    </Container>
  );
};

export default About;

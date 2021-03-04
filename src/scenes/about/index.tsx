import React from 'react';

import {
  Container,
  ContentContainer,
  TitleContainer,
  ParagraphContainer,
  HrefParagraph,
} from './styles';

const About: React.FC = () => {
  return (
    <Container id="about">
      <ContentContainer>
        <TitleContainer>About</TitleContainer>
        <ParagraphContainer>
          My full name is Pedro Hugo da Silva Freire, I am 20 years old, I was
          born and raised in a small town in the interior of Rio Grande do Norte
          called Santo Antônio, I left there when I was 18 to study in Natal,
          the state capital, where I currently live.
          <br />
          <br />
          I am a Computer Technician graduated from the Federal Institute of Rio
          Grande do Norte in 2017 and Graduating in Bachelor of Information
          Technology. I also have the React and React-Native course certificate
          from Rocketseat.
          <br />
          <br />I have my own digital agency, Happy File (@ happy.file on instagram), 
          where I work as a graphic designer, designing logos, social media, inserts and video production. 
          I work with programs like Prohotoshop, Illustrator, Figma and Sony Vegas. 
          In addition to the agency, I interned at IFRN as
          a music tutor for 1 year and in the area of ​​prototype development
          for 1 year, building a low-cost fire sensor. At UFRN, I have been a
          fellow at the Education Center since 2018, where I have developed
          several systems with PHP, Laravel Framework, MySQL, HTML, CSS,
          JavaScript, jQuery, Bootstrap and other technologies.
          <br />
          <br />
          If you want random, regular updates on what I've been doing with my
          life, you can find me on Instagram
          <HrefParagraph
            href="https://www.instagram.com/pdrohugo/"
            target="_blank"
            rel="noreferrer"
          >
            @pdrohugo
          </HrefParagraph>
          or facebook
          <HrefParagraph
            href="https://www.facebook.com/pdrohugo/"
            target="_blank"
            rel="noreferrer"
          >
            Pedro Hugo
          </HrefParagraph>
        </ParagraphContainer>
      </ContentContainer>
    </Container>
  );
};

export default About;

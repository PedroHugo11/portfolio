import React from 'react';
import ImgAbout from 'src/assets/download.png';

import {
  Container,
  ContentContainer,
  TitleContainer,
  ParagraphContainer,
  ImageAbout,
  ContainerIntroAbout,
  TitleAbout,
} from './styles';

function calculaIdade(dataNasc: string){ 
  var dataAtual = new Date();
  var anoAtual = dataAtual.getFullYear();
  var anoNascParts = dataNasc.split('/');
  var diaNasc = parseInt(anoNascParts[0]);
  var mesNasc = parseInt(anoNascParts[1]);
  var anoNasc = parseInt(anoNascParts[2]);
  var idade = anoAtual - anoNasc;
  var mesAtual = dataAtual.getMonth() + 1; 
  if(mesAtual < mesNasc){
  idade--; 
  } else {
  if(mesAtual === mesNasc){ 
  if(new Date().getDate() < diaNasc ){ 
  idade--; 
  }
  }
  } 
  return idade; 
 }
var minhaIdade = calculaIdade('11/11/1999');

const About: React.FC = () => {
  return (
    <Container id="about">
      <ContentContainer>
        <TitleContainer>ABOUT</TitleContainer>
        <ContainerIntroAbout>
          <ImageAbout src={ImgAbout} />
          <TitleAbout>
            Hello World! I am Pedro Hugo, a Front-End Developer and Designer UI/UX.
          </TitleAbout>
        </ContainerIntroAbout>
 
        <ParagraphContainer>
          Hello, world! My full name is Pedro Hugo da Silva Freire. I am {minhaIdade} years old and I'm a Brazilian living in Natal, RN. English is my second language — I'm always a work in progress — and my native language is Portuguese.
        </ParagraphContainer>
        <ParagraphContainer>
          Mid-level web developer with solid experience in full stack development since 2018, working with React, Angular, .NET, and ASP.NET in the construction and maintenance of web systems. Additionally, I have extensive experience in creating, integrating, and monitoring automated tests using Playwright with C# and Selenium. I also work in the UI/UX design area, using tools like Figma to collaborate on creating modern and intuitive interfaces, ensuring a better user experience.
        </ParagraphContainer>
      </ContentContainer>
    </Container>
  );
};

export default About;

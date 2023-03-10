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
  //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
  if(mesAtual < mesNasc){
  idade--; 
  } else {
  //Se estiver no mes do nascimento, verificar o dia
  if(mesAtual === mesNasc){ 
  if(new Date().getDate() < diaNasc ){ 
  //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
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
            Hello World! I am Pedro Hugo, a Front-End Developer and graphic designer.
          </TitleAbout>
        </ContainerIntroAbout>
 
        <ParagraphContainer>
          Hello World! My full name is Pedro Hugo da Silva Freire, i am {minhaIdade} years old and i'm brazilian living in Natal/RN. English is my second language i'm always work in progress and my native language is portuguese.
          <br />
          <br />
          For 8 years learning many languages and working on private and academic projects with teams. Currently i'm working as frontend developer at Debtstream Solution.
          <br />
          <br />
        </ParagraphContainer>
      </ContentContainer>
    </Container>
  );
};

export default About;

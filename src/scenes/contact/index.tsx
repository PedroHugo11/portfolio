import React from 'react';
import ImgContact from 'src/assets/contact.png';

import Logo1 from 'src/assets/logos/logo.png';
import Logo2 from 'src/assets/logos/logo 2.png';
import Logo3 from 'src/assets/logos/logo 3.png';
import Logo4 from 'src/assets/logos/logo 4.png';

import {
  Container,
  ContentContainer,
  TitleContainer,
  ImageContact,
  ContainerContact,
  TitleContact,
  ParagraphContact,
  ContainerLogo,
  HrefLogo,
  Logo,
} from './styles';

const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <TitleContainer>Contact</TitleContainer>
      <ContentContainer>
        <ImageContact src={ImgContact} />
        <ContainerContact>
          <TitleContact>
            Questions ? Please contact us by e-mail below to request more
            information
          </TitleContact>
          <ParagraphContact>pedrohuugoo11@hotmail.com</ParagraphContact>
          <ContainerLogo>
            <HrefLogo href="https://github.com/PedroHugo11">
              <Logo src={Logo1} />
            </HrefLogo>
            <HrefLogo href="https://www.linkedin.com/in/pedrohugo11/">
              <Logo src={Logo2} />
            </HrefLogo>
            <HrefLogo href="https://www.instagram.com/pdrohugo/">
              <Logo src={Logo3} />
            </HrefLogo>
            <HrefLogo href="https://www.facebook.com/pdrohugo">
              <Logo src={Logo4} />
            </HrefLogo>
          </ContainerLogo>
        </ContainerContact>
      </ContentContainer>
    </Container>
  );
};

export default Contact;

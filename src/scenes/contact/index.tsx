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
  ParagraphContactLink,
} from './styles';

const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <TitleContainer>Contact</TitleContainer>
      <ContentContainer>
        <ImageContact src={ImgContact} />
        <ContainerContact>
          <TitleContact>
            Nice to meet you!
          </TitleContact>
          <ParagraphContactLink href="https://api.whatsapp.com/send?1=pt_BR&phone=5584998223869">Text me on WhatsApp!</ParagraphContactLink>
          <ParagraphContactLink href="mailto:pedrohuugoo11@hotmail.com">Mail me at pedrohuugoo11@hotmail.com</ParagraphContactLink>
          <ParagraphContactLink href="https://drive.google.com/file/d/1B0-2MbOwRP3BpDAXWn48-12udhR7P9Gc/view?usp=sharing">Curriculum Vitae</ParagraphContactLink>
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
          <ParagraphContact>2023/Natal-RN</ParagraphContact>
        </ContainerContact>
      </ContentContainer>
    </Container>
  );
};

export default Contact;

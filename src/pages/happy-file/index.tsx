import React from 'react';
import Header from 'src/components/header';
import { Center } from 'src/styles/global';
import MyImage from 'src/assets/happyFile.png';
import { BackgroundHome, Container, Content, ContentContainer, FooterImage, FooterPortfolio, HrefA, ImageContainer, ImgHome, ImgPorfolio, IntroOverlay, IntroSocial, IntroSocialLi, ParagraphCentralHome, TitleContainer, TitleHome1, TitleHome2 } from './styles';

import Image1 from 'src/assets/portfolio/1.png';
import Image2 from 'src/assets/portfolio/2.png';
import Image3 from 'src/assets/portfolio/3.png';
import Image4 from 'src/assets/portfolio/4.png';
import Image5 from 'src/assets/portfolio/5.png';
import Image6 from 'src/assets/portfolio/6.png';
import Image7 from 'src/assets/portfolio/7.png';
import Image8 from 'src/assets/portfolio/8.png';
import Image9 from 'src/assets/portfolio/9.png';
import Image10 from 'src/assets/portfolio/10.png';
import Image11 from 'src/assets/portfolio/11.png';
import Image12 from 'src/assets/portfolio/12.png';
import Image13 from 'src/assets/portfolio/13.png';
import Image14 from 'src/assets/portfolio/14.png';
import Image15 from 'src/assets/portfolio/15.png';
import Image16 from 'src/assets/portfolio/16.png';
import Image17 from 'src/assets/portfolio/17.png';
import Image18 from 'src/assets/portfolio/18.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

// import { Container } from './styles';

const HappyFile: React.FC = () => {
  return (
    <Container>
      <Header></Header>
      <Content>
        <IntroOverlay></IntroOverlay>
        <BackgroundHome></BackgroundHome>
        <Center>
          <TitleHome1>PORTFOLIO</TitleHome1>
          <TitleHome2>HAPPY FILE</TitleHome2>
          <ParagraphCentralHome>| Advertising Agency  |</ParagraphCentralHome>
          <ImgHome src={MyImage} />
        </Center>
      </Content>
      
      <ContentContainer>
        <TitleContainer>My Portfolio</TitleContainer>
        <ImageContainer>
          <ImgPorfolio src={Image1}></ImgPorfolio>
          <ImgPorfolio src={Image2}></ImgPorfolio>
          <ImgPorfolio src={Image3}></ImgPorfolio>
          <ImgPorfolio src={Image4}></ImgPorfolio>
          <ImgPorfolio src={Image5}></ImgPorfolio>
          <ImgPorfolio src={Image6}></ImgPorfolio>
          <ImgPorfolio src={Image7}></ImgPorfolio>
          <ImgPorfolio src={Image8}></ImgPorfolio>
          <ImgPorfolio src={Image9}></ImgPorfolio>
          <ImgPorfolio src={Image10}></ImgPorfolio>
          <ImgPorfolio src={Image11}></ImgPorfolio>
          <ImgPorfolio src={Image12}></ImgPorfolio>
          <ImgPorfolio src={Image13}></ImgPorfolio>
          <ImgPorfolio src={Image14}></ImgPorfolio>
          <ImgPorfolio src={Image15}></ImgPorfolio>
          <ImgPorfolio src={Image16}></ImgPorfolio>
          <ImgPorfolio src={Image17}></ImgPorfolio>
          <ImgPorfolio src={Image18}></ImgPorfolio>
        </ImageContainer>
      </ContentContainer>

      <FooterPortfolio>
        <FooterImage src={MyImage} />
        <IntroSocial>
          <IntroSocialLi>
            <HrefA target='_blank' href='https://api.whatsapp.com/send?1=pt_BR&phone=5584998223869'><FontAwesomeIcon icon={faWhatsapp}/></HrefA>
          </IntroSocialLi>
            <IntroSocialLi>
              <HrefA target='_blank' href='https://www.linkedin.com/in/pedrohugo11/'><FontAwesomeIcon icon={faLinkedin}/></HrefA>              
            </IntroSocialLi>
            <IntroSocialLi>
              <HrefA target='_blank' href='https://www.instagram.com/happy.file/'><FontAwesomeIcon icon={faInstagram}/></HrefA>
            </IntroSocialLi>           
        </IntroSocial>
      </FooterPortfolio>
    </Container>
      
  );
}

export default HappyFile;
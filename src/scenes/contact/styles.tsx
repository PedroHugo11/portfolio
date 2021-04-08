import styled from 'styled-components';
import { colors, media } from 'src/styles';
import BgContact from 'src/assets/bg_contact.png';
import BgContact2 from 'src/assets/bg_contact2.png';

export const Container = styled.section`
  height: 85vh;
  width: 100%;
  background-color: ${colors.background};
  flex-flow: column nowrap;

  ${media.tablet} {
    height: 80vh;
    width: 100vw;
    margin-top: 6%;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  font-family: "poppins-bold", sans-serif;
  color: ${colors.terciary};
  background-image: url(${BgContact});

  &:after {
    content: '';
    display: block;
    width: 40px;
    height: 5px;
    background-color: ${colors.secondary};
    margin: 15px auto 0;
  }
`;

export const ContentContainer = styled.div`
  align-items: center;
  justify-content: center;
  background-image: url(${BgContact2});
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  flex-flow: row wrap;

  ${media.tablet} {
    flex-flow: row nowrap;
    margin-top: -3%;
  }
`;

export const ImageContact = styled.img`
  width: 70%;
  object-fit: contain;
  margin-top: 10%;
  object-position: left;

  ${media.tablet} {
    width: 30%;
    margin-top: 6%;
  }
`;

export const ContainerContact = styled.div`
  flex-flow: column wrap;
  width: 85%;
  justify-content: center;

  ${media.tablet} {
    margin-left: 4%;
    width: 40%;
    flex-flow: column nowrap;
  }
`;

export const TitleContact = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  font-family: "poppins-extrabold", sans-serif;
  color: ${colors.secondary};

  ${media.tablet} {
    font-size: 2rem;
  }
`;

export const ParagraphContactLink = styled.a`
  font-size: 1rem;
  margin-top: 2%;
  margin-left: 6%;
  text-align: center;
  font-family: "poppins-medium", sans-serif;
  color: #013e75;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  ${media.tablet} {
    font-size: 1.5rem;
    margin-left: 0%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const ParagraphContact = styled.p`
  
  font-size: 1.5rem;
  margin-top: 5%;
  text-align: center;
  
  font-family: "poppins-bold", sans-serif;
  color: ${colors.secondary};

  ${media.tablet} {
    font-size: 1.7rem;
    margin-top: 5%;
  }
`;

export const ContainerLogo = styled.div`
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  align-text: center;
  margin-top: 5%;
  margin-left:0%;

  ${media.tablet} {
    margin-top: 5%;
    margin-left:0%;
  }
`;

export const HrefLogo = styled.a`
  margin-left: 3%;
  margin-right: 3%;
  justify-content: center;
  align-items: center;
  align-text: center;

  ${media.tablet} {
    margin-left: 1% !important;
    margin-right: 1% !important;
  }
`;

export const Logo = styled.img`
  width: 2.5rem;

  ${media.tablet} {
    width: 2rem;
  }
`;

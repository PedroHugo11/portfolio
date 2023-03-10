import styled from 'styled-components';
import { colors, media } from 'src/styles';
import BgAbout from 'src/assets/bg_service.png';

export const Container = styled.section`
  min-height: 85vh;
  width: 100vw;
  background-color: ${colors.background};
  flex-flow: column nowrap;
  align-items: center;
  margin-top:60%;

  
  ${media.mobileL} {
    margin-top:5% !important;
  }

  ${media.mobileM} {
    margin-top:5% !important;
  }

  ${media.tablet} {
    margin-top:0% !important;
    
    width: 100vw;
  }
`;

export const ContentContainer = styled.div`
  background-image: url(${BgAbout});
  background-position: left;
  background-size: auto;
  background-repeat: no-repeat;
  flex-flow: column wrap;
  align-items: center;
`;

export const TitleContainer = styled.h1`
  margin-top: 5%;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2%;
  font-family: "poppins-bold", sans-serif;
  color: ${colors.terciary};
  width:100vw;

  &:after {
    content: '';
    display: block;
    width: 40px;
    height: 5px;
    background-color: ${colors.secondary};
    margin: 5px auto 0;
  }
`;

export const ContainerIntroAbout = styled.div`
  flex-flow: row wrap;
  width: 100%;
  margin-top: 0%;
  margin-bottom:2%;
  justify-content: center;
  text-align:center;

  ${media.tablet} {
    padding-left: 15rem;
    padding-right: 15rem;
    flex-flow: row nowrap;
  }
`;

export const ImageAbout = styled.img`
  width: 60% !important;
  object-fit: contain;
  margin-top: 5%;

  ${media.tablet} {
    width: 35% !important;
    margin-top: 0%;
  }
`;

export const TitleAbout = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  font-family: "poppins-bold", sans-serif;
  color: ${colors.terciary};
  margin-left:2%;
  margin-right:2%;
  padding: 0;
  margin-top:6%;

  ${media.tablet} {
    text-align: justify;
    margin-left:10%;
    margin-top:6%;
    font-size: 1.6rem;
    line-height: 1.3;
  }
`;

export const ParagraphContainer = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: justify;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  line-height: 1.5;
  font-family: 'Noto Sans JP';
  flex-flow: column nowrap;

  ${media.tablet} {
    font-size: 1.2rem;
    padding-left: 15rem;
    padding-right: 15rem;
  }
`;

export const HrefParagraph = styled.a`
  flex-flow: column nowrap;
  color: blue;
  transform: none;
`;

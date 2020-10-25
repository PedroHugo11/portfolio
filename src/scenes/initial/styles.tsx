import { colors, media } from 'src/styles';
import styled from 'styled-components';
import BgHome from 'src/assets/bg_home.png';

export const Container = styled.section`
  height: 100%;
  width: 100%;
  background-color: ${colors.background};

  ${media.tablet} {
    height: 100vh;
    width: 100vw;
  }
`;

export const ContentContainer = styled.div`
  align-items: center;
  justify-content: center;
  background-image: url(${BgHome});
  background-position: auto;
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 25%;
  flex-flow: row wrap;

  ${media.tablet} {
    flex-flow: row nowrap;
    margin-top: 0%;
  }
`;

export const ImageHome = styled.img`
  width: 70%;
  object-fit: contain;
  margin-top: 30%;

  ${media.tablet} {
    width: 30%;
    margin-top: 0%;
  }
`;

export const ContainerTextHome = styled.div`
  flex-flow: row wrap;
  width: 85%;
  margin-top: 5%;

  ${media.tablet} {
    margin-left: 4%;
    width: 40%;
    flex-flow: column nowrap;
  }
`;

export const TitleHome = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: justify;
  font-family: 'Noto Sans JP';
  color: ${colors.terciary};

  ${media.tablet} {
    font-size: 2rem;
    line-height: 1.3;
  }
`;

export const ParagraphHome = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-top: 2%;
  text-align: justify;
  font-family: 'Noto Sans JP';
`;

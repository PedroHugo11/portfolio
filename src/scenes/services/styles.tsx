import { colors, media } from 'src/styles';
import styled from 'styled-components';
import BgService from 'src/assets/bg_about.png';

export const Container = styled.section`
  min-height: 150%;
  width: 100vw;
  background-color: ${colors.background};
  flex-flow: column nowrap;
  margin-bottom: 7%;

  ${media.tablet} {
    min-height: 100vh;
    width: 100wvw;
    margin-bottom: 5%;
  }
`;

export const ContentContainer = styled.div`
  min-height: 85vh;
  background-image: url(${BgService});
  background-position: right center;
  background-size: contain;
  background-repeat: no-repeat;
  flex-flow: column nowrap;
  align-items: center;
`;

export const TitleContainer = styled.h1`
  margin-top: 5%;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1%;
  font-family: "poppins-bold", sans-serif;
  color: ${colors.terciary};

  &:after {
    content: '';
    display: block;
    width: 40px;
    height: 5px;
    background-color: ${colors.secondary};
    margin: 5px auto 0;
  }

  ${media.tablet} {
    margin-top: 0%;
  }
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
  font-family: 'Noto Sans JP';
  width: 90%;
  margin-bottom: 1.5%;

  ${media.tablet} {
    width: 50%;
  }
`;

export const ImageContainer = styled.div`
  flex-flow: row wrap;
  width: 60% !important;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    width: 60%;
  }
`;

export const ImageService = styled.img`
  flex-flow: row wrap;
  width: 14rem;
  padding-right: 2rem;
  padding-left: 2rem;
  margin-top: 1.5rem;

  ${media.tablet} {
    width: 15rem;
    margin-top: 0rem;
  }
`;

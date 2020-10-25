import styled from 'styled-components';
import { colors, media } from 'src/styles';
import BgAbout from 'src/assets/bg_service.png';

export const Container = styled.section`
  min-height: 85vh;
  width: 100%;
  background-color: ${colors.background};
  flex-flow: column nowrap;
  align-items: center;

  ${media.tablet} {
    min-height: 100vh;
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
  font-family: 'Noto Sans JP';
  color: ${colors.terciary};

  &:after {
    content: '';
    display: block;
    width: 40px;
    height: 5px;
    background-color: ${colors.secondary};
    margin: 5px auto 0;
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

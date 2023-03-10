import styled from 'styled-components';
import { colors, media } from 'src/styles';
import BgProject from 'src/assets/bg_project.png';


export const Container = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${colors.background};
  flex-flow: column nowrap;
`;

export const ContentContainer = styled.div`
  min-height: 85vh;
  background-image: url(${BgProject});
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  flex-flow: column nowrap;
  align-items: center;
`;

export const TitleContainer = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2%;
  font-family: "poppins-bold", sans-serif;
  color: ${colors.terciary};

  &:after {
    content: '';
    display: block;
    width: 40px;
    height: 5px;
    background-color: ${colors.secondary};
    margin: 15px auto 0;
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

export const Linka = styled.a`
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.5;
  font-family: 'Noto Sans JP';
  display:inline;
`;

export const ImageContainer = styled.div`
  flex-flow: row wrap;
  width: 90% !important;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    width: 75% !important;
    flex-flow: row wrap;
  }
`;
import styled from 'styled-components';
import { colors, media } from 'src/styles';
import BgAbout from 'src/assets/bg_service.png';

export const Container = styled.section`
  min-height: 50vh;
  width: 100%;
  background-color: ${colors.background};
  flex-flow: column nowrap;
  align-items: center;
  margin-top:0%;

  
  ${media.mobileL} {
    margin-top:0% !important;
  }

  ${media.mobileM} {
    margin-top:0% !important;
  }

  ${media.tablet} {
    margin-top:0% !important;
    min-height: 40vh;
    width: 100vw;
  }
`;

export const ContentContainer = styled.div`
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
  width:100%;

  &:after {
    content: '';
    display: block;
    width: 40px;
    height: 5px;
    background-color: ${colors.secondary};
    margin: 5px auto 0;
  }
`;

export const ImageContainer = styled.div`
  flex-flow: row wrap;
  width: 60% !important;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    width: 100% !important;
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


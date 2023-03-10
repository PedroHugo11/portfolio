import {media, colors } from 'src/styles';
import styled from 'styled-components';

import BgHome from 'src/assets/intro-bg-3.png';
import BgHome2 from 'src/assets/intro-bg-4.png';

export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-flow: row wrap;

  ${media.tablet} {
    height: 100vh;
    width: 100vw;
  }
`;

export const Content = styled.section`
  min-height: 100vh;
  display: flex;
`;

export const IntroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #01182e;
  opacity: .50;
  z-index:1;
`;

export const BackgroundHome = styled.img`
  width: 100vw;
  min-height:100vh;
  background-image: url(${BgHome2});
  background-size: cover;
  background-repeat: no-repeat;

  ${media.mobileS} {
    position: absolute;
    width: 100vw;
    height:100vh;
    background-repeat: repeat;
    background-size: cover;
    left:0;
    rigth:0;
    top:0;
  }

  ${media.mobileM} {
    position: absolute;
    width: 100vw;
    height:100vh;
  }

  ${media.mobileL} {
    position: absolute;
    width: 100vw;
    height:100vh;
    background-image: url(${BgHome2}) !important;
  }

  ${media.laptop} {
    position: absolute;
    background-size: cover;
    background-attachment: fixed !important;
    left:0;
    z-index: 0;
    background-image: url(${BgHome}) !important;
  }

`;

export const TitleHome1 = styled.h5`
  text-align:center;
  color: #2eb2ff;
  font-family: "poppins-bold";
  font-size: 2rem;
  line-height: 1.565;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: .3rem;
  text-shadow: 0 0 6px rgb(0 0 0 / 20%);
  z-index: 1;
  font-family: 'poppins-bold';
  margin-top:31%;

  ${media.mobileS} {
    font-size: 2rem;
  }

  ${media.mobileM} {
    font-size: 2rem;
  }

  ${media.mobileL} {
    font-size: 4rem;
  }

  ${media.tablet} {
    margin-top:15%;
  }

`;

export const TitleHome2 = styled.h1`
  color: #FFFFFF;
  font-family: "poppins-medium", sans-serif;
  font-size: 6.4rem;
  line-height: 1.071;
  max-width: 900px;
  margin-top: 0;
  
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 0 20px rgb(0 0 0 / 50%);
  text-align:center;

  ${media.mobileS} {
    font-size: 5rem;
  }

  ${media.mobileM} {
    font-size: 6rem;
  }

  ${media.mobileL} {
    font-size: 8rem;
  }

  ${media.tablet} {
    margin-bottom: 11%;
  }

`;

export const ParagraphCentralHome = styled.p`
    font-family: "poppins-bold", sans-serif;
    font-size: 1.0rem; 
    line-height: 2.4rem; 
    text-transform: uppercase; 
    letter-spacing: .2rem; 
    color: #2eb2ff;
    text-shadow: 0 0 6px rgb(0 0 0 / 20%);
    text-align:center;
    margin-top:8%;

    ${media.mobileL} {
        font-size: 2rem;
    }

    ${media.tablet} {
        font-size: 2rem !important;
        margin-top:0%;
        margin-bottom:-1%;
    }

    ${media.laptop} {
        font-size: 1rem !important;
        margin-top:0%;
        margin-bottom:-1%;
    }
`;

export const ImgHome = styled.img`
    width: 80%;

    ${media.mobileL} {
        width: 80% !important;
    }

    ${media.tablet} {
        width: 60% !important;
    }

    ${media.laptop} {
        width: 20% !important;
    }
`;

export const ContentContainer = styled.section`
  min-height: 100vh;
  width: 100vw;
  flex-flow: row wrap;
  
`;

export const TitleContainer = styled.h1`
  margin-top: 4%;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2%;
  font-family: 'Noto Sans JP';
  color: ${colors.terciary};
  width:100%;
  z-index: -1;

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
  width: 90% !important;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    width: 100% !important;
    flex-flow: row wrap;
    margin-top:0%;
  }
`;

export const ImgPorfolio = styled.img`
  width:25%;
  margin:3px 3px;
`;

export const FooterPortfolio = styled.div`
  flex-flow: row wrap;
  width: 100% !important;
  align-items: center;
  justify-content: center;
  background-color: #2eb2ff;
  margin-top:2% !important;

  ${media.tablet} {
    width: 100vw !important;
    height:40vh;
  }
`;

export const FooterImage = styled.img`
  width: 35%;
  margin-top:-5%;
`;

export const IntroSocial = styled.ul` 
  position: absolute;
  font-size: 3rem;
  margin:auto;
  z-index:2;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;

export const IntroSocialLi = styled.li`
  display: inline-block;
  margin:0 20px;
  padding: 0;
  color:white;
  z-index:1;
`;

export const HrefA = styled.a`
  color:white;
`;
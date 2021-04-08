import { media } from 'src/styles';
import styled from 'styled-components';
import BgHome from 'src/assets/intro-bg.jpg';
import BgHome2 from 'src/assets/intro-bg-2.png';


export const Container = styled.section`
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    height: 100vh;
    width: 100vw;
  }
`;

export const ContentContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin-top: 25%;
  flex-flow: row wrap;

  ${media.tablet} {
    flex-flow: row nowrap;
    margin-top: 0%;
  }
`;

export const IntroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #125da1;
  opacity: .51;
  z-index:1;

  ${media.mobileS} {
    height: 100vh;
  }

  ${media.mobileM} {
    width: 100vw;
    height: 100vh;
  }

  ${media.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #125da1;
    opacity: .51;
    z-index:1;
  }

  ${media.mobileL} {
    height: 100vh;
  }

`;

export const BackgroundHome = styled.img`
  width: 100vw;
  height:100vh;
  background-image: url(${BgHome2});
  background-size: cover;
  position: absolute;
  background-attachment: fixed !important;

  ${media.tablet} {
    width: 100vw;
    height:100vh;
    position: absolute;
    background-size: cover;
    background-attachment: fixed !important;
    left:0;
    z-index: 0;
    background-image: url(${BgHome});
  }

`;

export const TitleHome1 = styled.h5`
  text-align:center;
  color: #ff5b2f;
  font-family: "poppins-bold";
  font-size: 1.5rem;
  line-height: 1.565;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: .3rem;
  text-shadow: 0 0 6px rgb(0 0 0 / 20%);
  z-index: 1;
  font-family: 'poppins-bold';
  margin-top:15%;

  ${media.tablet} {
    text-align:center;
    color: #ff5b2f;
    font-family: "poppins-bold";
    font-size: 1.5rem;
    line-height: 1.565;
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: .3rem;
    text-shadow: 0 0 6px rgb(0 0 0 / 20%);
    z-index: 1;
    font-family: 'poppins-bold';
    top:0;
    margin-top:0% !important;
  }

  ${media.mobileS} {
    margin-top:-15%;
  }

  ${media.mobileL} {
    margin-top:-10%;
  }

  ${media.mobileM} {
    margin-top:-20%;
  }

`;

export const TitleHome2 = styled.h1`
  color: #FFFFFF;
  font-family: "poppins-medium", sans-serif;
  font-size: 6.4rem;
  line-height: 1.071;
  max-width: 900px;
  margin-top: 0;
  margin-bottom: .6rem;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 0 0 20px rgb(0 0 0 / 50%);
  text-align:center;

  ${media.mobileS} {
    font-size: 5rem;
  }

  ${media.tablet} {
    color: #FFFFFF;
    font-family: "poppins-medium", sans-serif;
    font-size: 7rem;
    line-height: 1.071;
    max-width: 900px;
    margin-top: 0;
    margin-bottom: .6rem;
    margin-left: auto;
    margin-right: auto;
    text-shadow: 0 0 20px rgb(0 0 0 / 50%);
    text-align:center;
  }
  
`;

export const ParagraphCentralHome = styled.p`
  font-family: "poppins-regular", sans-serif;
    font-size: 1.0rem; 
     line-height: 2.4rem; 
     text-transform: uppercase; 
     letter-spacing: .2rem; 
     color: rgba(255, 255, 255, 0.5);
     text-shadow: 0 0 6px rgb(0 0 0 / 20%);
     text-align:center;
`;

export const ButtonHome = styled.button`
  color: #FFFFFF !important;
  border-color: rgba(255, 255, 255, 0.3) !important;
  padding: 1rem 1rem 1rem 1rem !important;
  margin-top: 1.5rem;
  font-size: 1.0rem;
  text-transform: uppercase;
  letter-spacing: .25rem;
  background: transparent !important;
  border: 3px solid #002B33;
  font-family: "poppins-bold", sans-serif;
  border-radius: 10px;
`;

export const IntroSocial = styled.ul` 
  position: absolute;
  font-size: 2rem;
  margin:auto;
  margin-top:0%;
  z-index:1;
  bottom:0;
  align-items: center;
  justify-content: center;
  margin-bottom:15%;

  ${media.mobileM} {
    margin-bottom:15% !important;
  }

  ${media.mobileS} {
    margin-bottom:15%;
  }

  ${media.tablet} {
    margin-top:500% !important;
    bottom:-25%;
  }

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

export const ButtonLink = styled.a`
  color:white;
`;


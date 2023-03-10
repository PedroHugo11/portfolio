import { colors, media } from 'src/styles';
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  position: absolute;
  z-index:0;
`;

export const Nav = styled.nav`
  position: fixed;
  justify-content: space-around;
  align-items: center;
  background: ${colors.background};
  height: 5rem;
  width: 100vw;
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.5);

  ${media.tablet} {
    top:0;
    position: fixed;
    justify-content: space-around;
    align-items: center;
    background: ${colors.background};
    height: 5rem;
    width: 100%;
    box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.5);
  }
`;

export const Linke = styled.a`
  color: ${colors.primary};
  font-family: "poppins-bold";

  ${media.tablet} {
    color: ${colors.primary};
    font-family: "poppins-bold";
  }
`;

export const Logo = styled.img`
  object-fit: contain;
  width: 7%;
  padding: 0.7rem;
`;

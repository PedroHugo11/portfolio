import styled from 'styled-components';

import { colors, media } from 'src/styles';

export const ThumbnailProject = styled.div`
  display: flex;
  background-color: #faf9f9;
  border: 2px solid #fff;
  border-width: 1px;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  margin-top: 10%;

  ${media.tablet} {
    width: 30%;
    margin-left: 1.5%;
    margin-right: 1.5%;
    margin-top: 2%;
  }
`;

export const LastThumbnailProject = styled.div`
  display: flex;
  background-color: #faf9f9;
  border: 2px solid #fff;
  border-width: 1px;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  margin-top: 10%;

  ${media.tablet} {
    width: 100%;
    margin-left: 1.5%;
    margin-right: 1.5%;
    margin-top: 2%;
  }
`;

export const ThumbnailLink = styled.a`
  margin-left: auto;
  margin-bottom: 20px;
  display: flex;
  box-shadow: none;
  text-decoration: none;
  flex-flow: column nowrap;
`;

export const ThumbnailImage = styled.img`
  object-fit: contain;
  width: 100%;

  ${media.tablet} {
    margin-bottom: 3%;
  }
`;

export const ThumbnailTitle = styled.h2`
  font-size: 1.4rem;
  color: ${colors.secondary};
  font-family: 'Noto Sans JP';
  text-align: right;
  margin-right: 8%;
`;

export const ThumbnailDescription = styled.p`
  font-size: 0.9rem;
  font-family: 'Noto Sans JP';
  font-weight: 300;
  text-align: right;
  margin-right: 8%;
`;

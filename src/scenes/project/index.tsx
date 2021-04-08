import React from 'react';

import {
  Container,
  ContentContainer,
  TitleContainer,
  SubTitle,
  ImageContainer,
} from './styles';

import imageIIDS from 'src/assets/projects/iids.jpg';
import imageInfinity from 'src/assets/projects/infinity.jpg';
import imageLife from 'src/assets/projects/life.jpg';
import imageNei from 'src/assets/projects/nei.jpg';
import imagePpged from 'src/assets/projects/ppged.jpg';
import imageHappyFile from 'src/assets/projects/happyfile.png';

import Thumbnail from 'src/components/thumbnail';

const Project: React.FC = () => {
  return (
    <Container id="projects">
      <ContentContainer>
        <TitleContainer>Projects</TitleContainer>
        <SubTitle>
          Here are some of my works, around 10 projects were carried out. I
          separated some of my own projects or carried out in partnership in
          this session.
        </SubTitle>
        <ImageContainer>
          <Thumbnail
            image={imageIIDS}
            title="IIDS"
            description="Agency: Atwork"
            link=""
          ></Thumbnail>
          <Thumbnail
            image={imageInfinity}
            title="Infinity Participações"
            description="Agency: Happy File"
            link="https://pedrohugo11.github.io/"
          ></Thumbnail>
          <Thumbnail
            image={imageLife}
            title="LIFE"
            description="Made by me, by Centro de Educação - UFRN"
            link="http://life.ce.ufrn.br/"
          ></Thumbnail>
          <Thumbnail
            image={imageNei}
            title="NEI"
            description="Made by me, by Centro de Educação - UFRN"
            link="https://nei.ufrn.br/"
          ></Thumbnail>
          <Thumbnail
            image={imagePpged}
            title="PPGEd"
            description="Made by me, by Centro de Educação - UFRN"
            link="http://ppged.ufrn.br/"
          ></Thumbnail>
            <Thumbnail
              image={imageHappyFile}
              title="Agência Happy File"
              description="Portfolio Graphic Designer"
              link="/happy-file"
            ></Thumbnail>
        </ImageContainer>
      </ContentContainer>
    </Container>
  );
};

export default Project;

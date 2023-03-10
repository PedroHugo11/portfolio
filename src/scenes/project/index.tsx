import React from 'react';

import {
  Container,
  ContentContainer,
  TitleContainer,
  SubTitle,
  ImageContainer,
  Linka,
} from './styles';

import imageIIDS from 'src/assets/projects/iids.jpg';
import imageInfinity from 'src/assets/projects/infinity.jpg';
import imageLife from 'src/assets/projects/life.jpg';
import imageNei from 'src/assets/projects/nei.jpg';
import imagePpged from 'src/assets/projects/ppged.jpg';
import imageDebtstream from 'src/assets/projects/debtstream.png';

import Thumbnail from 'src/components/thumbnail';

const Project: React.FC = () => {
  return (
    <Container id="projects">
      <ContentContainer>
        <TitleContainer>Projects</TitleContainer>
        <SubTitle>
        During my formation in I.T. at <Linka href="https://www.metropoledigital.ufrn.br/portal/">IMD</Linka>, I worked as a Full-Stack for 4 years at <Linka href="https://ce.ufrn.br/">Centro de Educação</Linka> and 1 year at <Linka href="https://debtstream.co.uk/">Debtstream Solutions</Linka>. I worked on development projects for both systems and portals. Below I show some products that I participated in the development/creation.
        </SubTitle>
        <ImageContainer>
          <Thumbnail
            image={imageIIDS}
            title="IIDS"
            description="Happy File"
            link="https://iidsintegrada.com.br/"
          ></Thumbnail>
          <Thumbnail
            image={imageInfinity}
            title="Infinity Participações"
            description="Happy File"
            link="https://pedrohugo11.github.io/"
          ></Thumbnail>
          <Thumbnail
            image={imageLife}
            title="LIFE"
            description="Centro de Educação - UFRN"
            link="http://life.ce.ufrn.br/"
          ></Thumbnail>
          <Thumbnail
            image={imageNei}
            title="NEI"
            description="Centro de Educação - UFRN"
            link="https://nei.ufrn.br/"
          ></Thumbnail>
          <Thumbnail
            image={imagePpged}
            title="PPGEd"
            description="Centro de Educação - UFRN"
            link="http://ppged.ufrn.br/"
          ></Thumbnail>
          <Thumbnail
            image={imageDebtstream}
            title="Debtstream Solutions"
            description="Portal Debtstream"
            link="https://debtstream.co.uk/"
          ></Thumbnail>
        </ImageContainer>
      </ContentContainer>
    </Container>
  );
};

export default Project;

import React from 'react';
import ImgHome from 'src/assets/download.png';

import {
  Container,
  ContentContainer,
  ImageHome,
  ContainerTextHome,
  TitleHome,
  ParagraphHome,
} from './styles';

const Initial: React.FC = () => {
  return (
    <Container id="initial">
      <ContentContainer>
        <ImageHome src={ImgHome} />
        <ContainerTextHome>
          <TitleHome>
            Hello World! I am Pedro Hugo, a Fullstack Web Developer with
            experience in PHP, HTML, CSS and JS technologies.
          </TitleHome>
          <ParagraphHome>
            Since 2014 learning and developing in several programming languages.
            Currently, web developer, PHP and JS programmer, I always try to
            keep abreast of news to create interfaces following modern and
            advanced concepts, focused on usability and emotional design.
          </ParagraphHome>
        </ContainerTextHome>
      </ContentContainer>
    </Container>
  );
};

export default Initial;

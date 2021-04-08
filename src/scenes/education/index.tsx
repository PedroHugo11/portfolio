import React from 'react';
import { Container, ContentContainer, ImageContainer, ImageService, TitleContainer } from './style';

import Ifrn from 'src/assets/education/ifrn.png';
import Ufrn from 'src/assets/education/ufrn.png';
import Imd from 'src/assets/education/imd.png';
import Rocketseat from 'src/assets/education/rocketseat.png';

const Education: React.FC = () => {
  return (
    <Container id="about">
     <ContentContainer>
         <TitleContainer>EDUCATION</TitleContainer>
         <ImageContainer>
          <ImageService src={Ifrn} />
          <ImageService src={Ufrn} />
          <ImageService src={Imd} />
          <ImageService src={Rocketseat} />
        </ImageContainer>
     </ContentContainer>
    </Container>
  );
};

export default Education;

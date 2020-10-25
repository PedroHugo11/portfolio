import React from 'react';

import {
  ThumbnailProject,
  ThumbnailLink,
  ThumbnailImage,
  ThumbnailTitle,
  ThumbnailDescription,
} from './styles';

interface Props {
  image: string;
  title: string;
  description: string;
}

const Thumbnail: React.FC<Props> = ({ image, title, description }) => {
  return (
    <ThumbnailProject>
      <ThumbnailLink>
        <ThumbnailImage src={image} />
        <ThumbnailTitle>{title}</ThumbnailTitle>
        <ThumbnailDescription>{description}</ThumbnailDescription>
      </ThumbnailLink>
    </ThumbnailProject>
  );
};

export default Thumbnail;

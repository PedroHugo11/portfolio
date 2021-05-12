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
  link: string;
}

const Thumbnail: React.FC<Props> = ({ image, title, description, link }) => {
  return (
    <ThumbnailProject>
      <ThumbnailLink href={link}>
        <ThumbnailImage src={image} />
        <ThumbnailTitle>{title}</ThumbnailTitle>
        <ThumbnailDescription>{description}</ThumbnailDescription>
      </ThumbnailLink>
    </ThumbnailProject>
  );
};

export default Thumbnail;

import React from 'react';
import { S3Album } from 'aws-amplify-react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  > div > div {
    display: flex;
    flex-wrap: wrap;
    margin: 0.25rem;
  }

  > div > div > div {
    margin: 0.5rem;
  }

  img {
    width: 400px;
    height: 400px;
  }
`;

export const Gallery = ({ userName }) => (
  <GalleryContainer>
    <S3Album level="private" path="" />
  </GalleryContainer>
);

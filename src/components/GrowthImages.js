import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  display: flex;

  img {
    max-width: 100%;
    max-height: 40px;
    margin-left: 4px;
  }

  img:last-child {
  }
`;

const GrowthImages = ({ imgs }) => {
  const imageList = imgs || [];
  const sortedImages = imageList.sort((a, b) =>
    a.filename > b.filename ? 1 : -1
  );

  return (
    <div>
      <h3>Growth</h3>
      <ImageWrapper>
        {sortedImages.map(image => (
          <img
            key={image.url}
            alt='crop growth chart'
            src={image.url}
          />
        ))}
      </ImageWrapper>
    </div>
  );
};

export default GrowthImages;

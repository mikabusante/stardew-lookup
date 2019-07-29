import React from 'react';
import styled from 'styled-components';

const Name = styled.span`
  font-family: 'Anonymous Pro', monospace;
`;

const Icon = styled.img`
  width: 25px;
  margin-right: 8px;
  vertical-align: middle;
  margin-bottom: 2px;
`;

const UsesWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const Uses = ({ imgs }) => {
  const images = imgs || [];

  return (
    <div>
      <h3>Used In</h3>

      {images.map(image => (
        <UsesWrapper key={image.id}>
          <div>
            <Icon src={image.url} />
          </div>
          <div>
            <Name>
              {image.filename
                .replace('.png', '')
                .replace(/_/g, ' ')
                .replace('24px-', '')
                .replace('%27', '')}
            </Name>
          </div>
        </UsesWrapper>
      ))}
    </div>
  );
};

export default Uses;

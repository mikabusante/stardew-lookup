import React from 'react';
import styled from 'styled-components';
import coin from '../images/coin.png';

const GrowthText = styled.div`
  font-family: 'Anonymous Pro', monospace;
  margin: 1.2em 0;

  p {
    margin-bottom: 0.25em;
  }

  img {
    width: 15px;
    vertical-align: -15%;
    margin-left: 2px;
  }

  .number {
    font-weight: 700;
  }
`;

const PerDay = styled.span`
  color: #999;
  vertical-align: middle;
  white-space: nowrap;
`;

const GrowthInfo = ({ harvest, regrowth, sell }) => {
  return (
    <div>
      <GrowthText>
        <p>
          Harvest in{' '}
          <span className='number'>{harvest}</span> days
        </p>

        {regrowth ? (
          <p>
            Regrowth in{' '}
            <span className='number'>{regrowth}</span> days
          </p>
        ) : null}

        <PerDay>
          <span>(≈ {sell}</span>
          <img src={coin} alt='' />
          <span>/day)</span>
        </PerDay>
      </GrowthText>
    </div>
  );
};

export default GrowthInfo;

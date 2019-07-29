import React from 'react';
import styled from 'styled-components';
import silver from '../images/silver.png';
import gold from '../images/gold.png';

import { afterCoinIcon } from '../utils/pseudo';

const IconSilver = styled.div`
  display: inline-block;
  position: relative;

  :after {
    content: '';
    background: url(${silver});
    background-size: contain;
    width: 11px;
    height: 11px;

    position: absolute;
    right: 16px;
    top: 14px;
  }
`;

const IconGold = styled(IconSilver)`
  :after {
    background: url(${gold});
    background-size: contain;
    width: 11px;
  }
`;
const CropIcon = styled.img`
  max-width: 25px;
  margin-right: 5px;
`;

const SellPrice = styled.span`
  font-family: 'Anonymous Pro', monospace;
  vertical-align: super;

  ${afterCoinIcon}
`;

const SellPrices = ({ crop, reg, silver, gold }) => {
  return (
    <div>
      <h3>Sell Price</h3>

      <div>
        <CropIcon src={crop} alt='' />
        <SellPrice>{reg}</SellPrice>
      </div>

      <div>
        <IconSilver>
          <CropIcon src={crop} alt='' />
        </IconSilver>
        <SellPrice>{silver}</SellPrice>
      </div>

      <div>
        <IconGold>
          <CropIcon src={crop} alt='' />
        </IconGold>
        <SellPrice>{gold}</SellPrice>
      </div>
    </div>
  );
};

export default SellPrices;

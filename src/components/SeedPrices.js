import React from 'react';
import styled from 'styled-components';
import Linebreak from './Linebreak';

import pierre from '../images/pierre.png';
import joja from '../images/joja.png';
import cart from '../images/cart.png';
import oasis from '../images/oasis.png';

import {
  beforeIconSize,
  afterCoinIcon
} from '../utils/pseudo';

const Seed = styled.img`
  width: 33px;
  min-height: 33px;
  vertical-align: -45%;
  margin-right: 0.3em;
  position: relative;
  right: 2px;
`;

const SeedPrice = styled.span`
  margin-right: 15px;
  font-family: 'Anonymous Pro', monospace;
  font-size: 1em;

  ${afterCoinIcon}
`;

const PricePierre = styled(SeedPrice)`
  :before {
    background: url(${pierre});
    ${beforeIconSize}
  }
`;

const PriceJoja = styled(SeedPrice)`
  :before {
    background: url(${joja});
    ${beforeIconSize}
  }
`;

const PriceCart = styled(SeedPrice)`
  :before {
    background: url(${cart});
    ${beforeIconSize}
    margin-right: 5px;
  }
`;

const PriceOasis = styled(SeedPrice)`
  :before {
    background: url(${oasis});
    ${beforeIconSize}
    margin-right: 5px;
  }
`;

const SeedPrices = ({
  seed,
  pierre,
  joja,
  cart,
  oasis
}) => {
  return (
    <div>
      <h3>Seed Price</h3>
      <Seed src={seed ? seed[0].url : null} alt='' />
      {pierre && <PricePierre>{pierre}</PricePierre>}
      {joja && <PriceJoja>{joja}</PriceJoja>}
      {cart && <PriceCart>{cart}</PriceCart>}
      {oasis && <PriceOasis>{oasis}</PriceOasis>}
      <Linebreak />
    </div>
  );
};

export default SeedPrices;

import React from 'react';
import styled from 'styled-components';
import Linebreak from './Linebreak';
import SeedPrices from './SeedPrices';
import SellPrice from './SellPrice';
import Uses from './Uses';
import GrowthImages from './GrowthImages';
import GrowthInfo from './GrowthInfo';

const CardWrapper = styled.div`
  box-shadow: 1px 3px 13px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 10px;
  padding: 100px 40px 40px 40px;

  .description {
    font-family: 'Spectral', serif;
    width: 90%;
    margin-bottom: 0.5em;
    color: #888;
  }

  .two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = props => {
  return (
    <CardWrapper>
      <img
        src={props.mainImg[0].url}
        alt={props.cropName}
      />
      <h2>{props.cropName}</h2>
      <p className='description'>{props.description}</p>
      <SeedPrices
        seed={props.seedImg}
        pierre={props.seedPricePierre}
        joja={props.seedPriceJoja}
        cart={props.seedPriceCart}
        oasis={props.seedPriceOasis}
      />
      <div className='two-column'>
        <SellPrice
          crop={props.mainImg[0].url}
          reg={props.sellRegQ}
          silver={props.sellSilvQ}
          gold={props.sellGoldQ}
        />
        {props.usedInImgs ? (
          <Uses imgs={props.usedInImgs} />
        ) : null}
      </div>

      <Linebreak />

      <GrowthImages imgs={props.growthImgs} />
      <GrowthInfo
        harvest={props.growthTime}
        regrow={props.regrowth}
        sell={props.avgSell}
      />
    </CardWrapper>
  );
};

export default Card;

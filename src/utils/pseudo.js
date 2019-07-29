import { css } from 'styled-components'
import coin from '../images/coin.png'

export const beforeIconSize = css`
  content: '';
  display: inline-block;
  background-size: contain;
  width: 25px;
  height: 25px;
  vertical-align: -30%;
  margin-right: 3px;
`

export const afterCoinIcon = css`
  :after {
    content: '';
    display: inline-block;
    background: url(${coin});
    background-size: contain;
    width: 15px;
    height: 15px;
    vertical-align: -20%;
    margin-right: 15px;
  }
`

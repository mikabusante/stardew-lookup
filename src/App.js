import React from 'react';
import CardList from './components/CardList';
import styled from 'styled-components';
import GlobalStyles from './utils/GlobalStyles';

const SiteWrapper = styled.div`
  padding: 3vw;

  h1 {
    text-align: center;
  }
`;

const App = () => {
  return (
    <SiteWrapper>
      <h1>Stardew Lookup</h1>
      <GlobalStyles />
      <CardList />
    </SiteWrapper>
  );
};

export default App;

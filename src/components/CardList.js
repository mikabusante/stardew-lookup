import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './Card';
import styled from 'styled-components';

const CardListWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  column-gap: 40px;
  row-gap: 30px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(350px, 1fr)
  );
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.75em;
`;

const Search = styled.input`
  width: 50%;
  height: 30px;
  padding: 7px 7px 7px 12px;
  font-family: 'Anonymous Pro';
  font-size: 1em;
`;

const CardList = () => {
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(

        `https://api.airtable.com/v0/appFCVQW4kA52cPBx/crops-list?api_key=${
          process.env.REACT_APP_API_KEY
        }`
      );

      setInfo(res.data.records);
    };

    fetchData();
  }, []);

  let filteredList = info.filter(item => {
    let itemToBeFiltered = item.fields.tags.toLowerCase();
    return itemToBeFiltered.indexOf(search) !== -1;
  });

  return (
    <div>
      <SearchWrapper>
        <Search
          type='text'
          value={search}
          placeholder='Search...'
          onChange={e => setSearch(e.target.value)}
        />
      </SearchWrapper>

      <CardListWrapper>
        {filteredList.map(info => (
          <Card key={info.id} {...info.fields} />
        ))}
      </CardListWrapper>
    </div>
  );
};

export default CardList;

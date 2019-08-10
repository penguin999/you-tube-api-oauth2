import React, { useContext } from 'react';

import ListItem from '../ListItem/ListItem';

import SearchContext from '../../context/SearchContext';

import { ListContainer } from './List.styles';

const List = props => {
  const items = props.items;
  const searchContext = useContext(SearchContext);

  return (
    <ListContainer showBackgroundImage={!searchContext.numberOfItems}>
      {items.map(item => {
        return <ListItem key={item.etag} item={item} />;
      })}
    </ListContainer>
  );
};

export default React.memo(List);

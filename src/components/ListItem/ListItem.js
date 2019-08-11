import React from 'react';

import {
  ListItemButton,
  ListItemContainer,
  ListItemDescription,
  ListItemInfo,
  ListItemTitle
} from './ListItem.styles';

const ListItem = props => {
  const item = props.item.snippet;
  const videoId = props.item.id.videoId;
  const channelId = props.item.id.channelId;
  let href = '';

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const date = new Date(item.publishedAt);
  const videoDate =
    date.getDate() +
    ' ' +
    monthNames[date.getMonth()] +
    ' ' +
    date.getFullYear();

  if (videoId) {
    href = `https://www.youtube.com/watch?v=${videoId}`;
  } else {
    href = `https://www.youtube.com/channel/${channelId}`;
  }

  return (
    <ListItemContainer>
      <div className="container">
        <div className="row p-3">
          <div className="col-5">
            <a href={href}>
              <img
                className="img-fluid mx-auto d-block"
                src={item.thumbnails.medium.url}
                alt="item thumbnail"
              />
            </a>
          </div>
          <div className="col-7">
            <ListItemTitle title={item.title}>{item.title}</ListItemTitle>
            <ListItemDescription title={item.description}>
              {item.description}
            </ListItemDescription>
            <div>
              <a href={href}>
                <ListItemButton className="btn btn-dark" type="button">
                  VIEW
                </ListItemButton>
              </a>
            </div>
            <ListItemInfo>
              <span>{videoDate}</span> by {item.channelTitle}
            </ListItemInfo>
          </div>
        </div>
      </div>
    </ListItemContainer>
  );
};

export default ListItem;

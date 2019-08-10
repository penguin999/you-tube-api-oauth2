import React from 'react';

import {
  ListItemButton,
  ListItemContainer,
  ListItemDescription,
  ListItemInfo,
  ListItemThumbnail,
  ListItemTitle
} from './ListItem.styles';

const ListItem = props => {
  const video = props.item.snippet;
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
  const date = new Date(video.publishedAt);
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
              <ListItemThumbnail
                src={video.thumbnails.medium.url}
                alt="video thumbnail"
              />
            </a>
          </div>
          <div className="col-7">
            <ListItemTitle title={video.title}>{video.title}</ListItemTitle>
            <ListItemDescription title={video.description}>
              {video.description}
            </ListItemDescription>
            <div>
              <a href={href}>
                <ListItemButton className="btn btn-dark" type="button">
                  VIEW
                </ListItemButton>
              </a>
            </div>
            <ListItemInfo>
              <span>{videoDate}</span> by {video.channelTitle}
            </ListItemInfo>
          </div>
        </div>
      </div>
    </ListItemContainer>
  );
};

export default ListItem;

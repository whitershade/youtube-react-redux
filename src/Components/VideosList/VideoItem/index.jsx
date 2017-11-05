import React                              from 'react';
import { objectOf, oneOfType, PropTypes } from 'prop-types';
import styled                             from 'styled-components';
import VideoTitle                         from './Title';
import VideoThumbnail                     from './Thumbnail';

const StyledLi = styled.li`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-gap: 20px;
  align-items: center;

  padding: 10px;
  margin-bottom: 10px;

  border: 1px solid gray;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const VideoItem = ({ changeSelectedVideo, video }) => (
  <StyledLi onClick={ changeSelectedVideo(video) }>
    <VideoThumbnail src={ video.snippet.thumbnails.default.url } />
    <VideoTitle text={ video.snippet.title } />
  </StyledLi>
);

VideoItem.propTypes = {
  changeSelectedVideo: PropTypes.func.isRequired,
  video: objectOf(oneOfType([PropTypes.object, PropTypes.string])).isRequired,
};

export default VideoItem;

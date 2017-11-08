import React     from 'react';
import PropTypes from 'prop-types';
import styled    from 'styled-components';
import Video     from './VideoItem';

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Videos = ({ videos, changeSelectedVideo }) => (
  <StyledUl>
    { videos.map(video => (
      <Video
        video={ video }
        key={ video.id.videoId }
        changeSelectedVideo={ changeSelectedVideo }
      />)) }
  </StyledUl>
);
Videos.propTypes = {
  changeSelectedVideo: PropTypes.func.isRequired,
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Videos;

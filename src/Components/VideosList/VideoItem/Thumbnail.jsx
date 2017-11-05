import React     from 'react';
import PropTypes from 'prop-types';
import styled    from 'styled-components';

const StyledImg = styled.img`
  display: block;
`;

const VideoThumbnail = ({ src }) => (
  <StyledImg src={ src } />
);

VideoThumbnail.propTypes = {
  src: PropTypes.string.isRequired,
};

export default VideoThumbnail;

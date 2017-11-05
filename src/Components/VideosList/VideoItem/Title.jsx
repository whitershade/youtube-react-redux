import React     from 'react';
import PropTypes from 'prop-types';
import styled    from 'styled-components';

const StyledTitle = styled.h3`
  padding: 0;
  margin: 0;
`;

const VideoTitle = ({ text }) => (
  <StyledTitle>
    { text }
  </StyledTitle>
);

VideoTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default VideoTitle;

import React     from 'react';
import PropTypes from 'prop-types';
import styled    from 'styled-components';

// Fluid Width Video: https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php

const StyledDiv = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const VideoDescription = ({ src }) => (
  <StyledDiv >
    <StyledIframe title="video" src={ src } />
  </StyledDiv>
);

VideoDescription.defaultProps = {
  src: '',
};

VideoDescription.propTypes = {
  src: PropTypes.string,
};

export default VideoDescription;

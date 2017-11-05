import React     from 'react';
import PropTypes from 'prop-types';
import styled    from 'styled-components';

const StyledP = styled.p``;

const VideoDescription = ({ description }) => (
  <StyledP>
    { description }
  </StyledP>
);

VideoDescription.defaultProps = {
  description: '',
};

VideoDescription.propTypes = {
  description: PropTypes.string,
};

export default VideoDescription;

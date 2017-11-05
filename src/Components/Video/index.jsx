import React        from 'react';
import PropTypes    from 'prop-types';
import styled       from 'styled-components';
import Title        from './Title';
import CurrentVideo from './Video';
import Description  from './Description';

const StyledDiv = styled.div``;

const Video = ({ video }) => {
  const url = video ? `https://www.youtube.com/embed/${video.id.videoId}` : '';

  return (
    video ? (
      <StyledDiv>
        <CurrentVideo src={ url } />
        <Title text={ video.snippet.title } />
        <Description description={ video.snippet.description } />
      </StyledDiv>
    ) : <div>Loading</div>
  );
};

Video.defaultProps = {
  video: undefined,
};

Video.propTypes = {
  video: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
};

export default Video;

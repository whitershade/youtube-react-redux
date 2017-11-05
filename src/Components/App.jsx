/* eslint-disable no-unused-expressions */
import React, { PureComponent } from 'react';
import { debounce }             from 'lodash';
import YoutubeApiSearch         from 'youtube-api-search';
import styled, { injectGlobal } from 'styled-components';
import Video                    from './Video';
import SearchBar                from './SearchBar';
import VideosList               from './VideosList';

const API_KEY = 'AIzaSyAxq7xyS28OrPiqN_tpfrAfHKc4m0U1xSU';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

const StyledApp = styled.div`
  padding: 15px;
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-gap: 15px;
`;

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.changeSearchText = this.changeSearchText.bind(this);
    this.youtubeApiSearch = this.youtubeApiSearch.bind(this);
    this.changeSelectedVideo = this.changeSelectedVideo.bind(this);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.youtubeApiSearch(this.state.searchText);
  }

  youtubeApiSearch(term) {
    YoutubeApiSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  changeSearchText(term) {
    this.youtubeApiSearch(term);
  }

  changeSelectedVideo(selectedVideo) {
    return () => this.setState({ selectedVideo });
  }

  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <StyledApp>
        <div>Youtube App</div>
        <SearchBar changeSearchText={ debounce(this.changeSearchText, 300) } />
        <StyledWrapper>
          <Video video={ selectedVideo } />
          <VideosList videos={ videos } changeSelectedVideo={ this.changeSelectedVideo } />
        </StyledWrapper>
      </StyledApp>
    );
  }
}

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

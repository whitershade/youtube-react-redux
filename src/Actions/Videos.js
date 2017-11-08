import YoutubeApiSearch from 'youtube-api-search';

export function loadItems(videos) {
  return {
    type: '@VIDEOS/LOAD_ITEMS',
    payload: videos,
  };
}

export function getVideos() {
  return (dispatch) => {
    const API_KEY = 'AIzaSyAxq7xyS28OrPiqN_tpfrAfHKc4m0U1xSU';

    YoutubeApiSearch({ key: API_KEY }, (videos) => {
      dispatch(loadItems(videos));
    });
  };
}

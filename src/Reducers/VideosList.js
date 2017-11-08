const Videos = (state = { data: [], isLoading: false }, { type, payload }) => {
  switch (type) {
    case '@VIDEOS/LOAD_ITEMS':
      return Object.assign({}, state, { data: payload });

    default:
      return state;
  }
};

export default Videos;

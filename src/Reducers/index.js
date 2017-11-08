import { combineReducers } from 'redux';
import videosList          from './VideosList';

const appReducer = combineReducers({
  videosList,
});

export default appReducer;

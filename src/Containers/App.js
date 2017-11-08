import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import Component              from '../Components/App';
import { getVideos }          from '../Actions/Videos';

function mapStateToProps(dispatch) {
  return bindActionCreators({ getVideos }, dispatch);
}

export default connect(null, mapStateToProps)(Component);

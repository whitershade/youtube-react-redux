import { connect } from 'react-redux';
import VideosList  from '../Components/VideosList';


const mapStateToProps = ({ videosList: { data: videos, isLoading } }) => ({
  videos,
  isLoading,
});


export default connect(mapStateToProps)(VideosList);

import TrackForm from './track_form';
import { createTrack, clearTrackErrors } from '../../actions/track_actions';
import { connect } from 'react-redux';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    currentUserTracks: state.entities.users[state.session.id].tracks,
    errors: state.errors.track,
    track: {
        title: '',
        uploaderId: state.session.id
    },
    formType: 'Create Track'
});

const mDTP = dispatch => ({
    action: track => dispatch(createTrack(track)),
    clearTrackErrors: () => dispatch(clearTrackErrors())
});

export default connect(mSTP, mDTP)(TrackForm);
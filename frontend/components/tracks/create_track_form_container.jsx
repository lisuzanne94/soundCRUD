import TrackForm from './track_form';
import { createTrack } from '../../actions/track_actions';
import { connect } from 'react-redux';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    currentUserTracks: state.entities.users[state.session.id].tracks,
    errors: state.errors.trackErrors,
    track: {
        title: '',
        uploaderId: state.session.id
    },
    formType: 'Create Track'
});

const mDTP = dispatch => ({
    action: track => dispatch(createTrack(track))
});

export default connect(mSTP, mDTP)(TrackForm);
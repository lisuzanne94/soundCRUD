import React from "react";
import { connect } from "react-redux"; 
import TrackForm from './track_form';
import { fetchTrack, updateTrack, clearTrackErrors } from "../../actions/track_actions";
import { closeModal } from '../../actions/modal_actions';

class EditTrackForm extends React.Component {

    render() {

        if (!this.props.track) return null;

        return (
            <TrackForm
                modalTrackId={this.props.modalTrackId}
                history={this.props.history}
                {...this.props}
            />
        );
    }
};

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.track,
    modalTrackId: ownProps.modalTrackId,
    track: state.entities.tracks[ownProps.modalTrackId],
    formType: 'Update Track'
});

const mDTP = dispatch => ({
    fetchTrack: trackId => dispatch(fetchTrack(trackId)),
    action: track => dispatch(updateTrack(track)),
    closeModal: () => dispatch(closeModal()),
    clearTrackErrors: () => dispatch(clearTrackErrors())
});

export default connect(mSTP, mDTP)(EditTrackForm);
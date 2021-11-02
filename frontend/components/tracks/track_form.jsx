import React from "react";

class TrackForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = this.props.track
        console.log(this.props.currentUserTracks)

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    //want to change push location to render success message
    handleSubmit (e) {
        e.preventDefault();
       this.props.action(this.state).then(this.props.history.push('/discover'))
    };

    update (field) {
        return e => this.setState({ [field]: e.target.value })
    };

    render () {

        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label>Track Title: </label>
                    <input type="text" 
                        value={this.state.title}
                        onChange={this.update('title')}
                    />
                    <br />
                    <label>File: </label>
                    <button>Upload</button>
                    <br />
                <button>{this.props.formType}</button>
                </form>
            </div>
        )
    }

};

export default TrackForm;
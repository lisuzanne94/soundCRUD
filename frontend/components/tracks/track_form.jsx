import React from "react";

class TrackForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.track
        this.state['uploaded'] = false;
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeUploadedStatus = this.changeUploadedStatus.bind(this);
    }


    changeUploadedStatus () {
        this.setState({ ['uploaded']: true })
    }

    handleSubmit (e) {
        e.preventDefault();
        // this.props.action(this.state).then(this.props.history.push('/discover'))
        this.props.action(this.state).then(this.changeUploadedStatus())
        this.setState({
            title: ''
        })
    };

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    render() {

        const uploadMsg = this.state.uploaded ? (
            <div>
                Success! =D
            </div>
        ) : (
            null
        )

        const uploadMsg = this.state.uploaded ? (
            <div>
                Success! =D
            </div>
        ) : (
            null
        )

        return (
            <div>

                {uploadMsg}

                <br />

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
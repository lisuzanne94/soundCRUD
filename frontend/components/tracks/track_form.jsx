import React from "react";

class TrackForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = this.props.track

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.action(this.state);
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
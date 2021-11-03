import React from "react";

class TrackForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.track,
            coverImage: null
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeUploadedStatus = this.changeUploadedStatus.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        this.setState({coverImage: e.currentTarget.files[0]})
    }

    changeUploadedStatus () {
        this.setState({ ['uploaded']: true })
    }

    handleSubmit (e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[id]', this.state.id);
        if (this.state.coverImage) {
            formData.append('track[cover_image]', this.state.coverImage);
        };

        this.props.action(formData).then(
            this.setState({
                title: '',
                coverImage: null
            })
        );

        this.props.clearTrackErrors();
    };

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    };


    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
        )
    }

    render() {

        if (!this.props.track) { return null }

        const uploadMsg = this.state.uploaded ? (
            <div>
                Success! =D
            </div>
        ) : (
            null
        )

        return (
            <div>
                {this.renderErrors()}

                <br />

                <form onSubmit={this.handleSubmit}>
                    <label>Track Title: </label>
                    <input type="text"
                        value={this.state.title}
                        onChange={this.update('title')}
                    />
                    <br />
                    <label>Upload image: </label>
                    <input type="file" 
                        value=""
                        title=" "
                        onChange={this.handleFile}/>
                    <br />
                    <button>{this.props.formType}</button>
                </form>
            </div>
        )
    }

};

export default TrackForm;
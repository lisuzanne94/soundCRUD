import React from "react";

class TrackForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.track,
            coverImage: null,
            trackFile: null,
            uploaded: false
        }
        
        this.handleGenre = this.handleGenre.bind(this);
        this.handleTrackFile = this.handleTrackFile.bind(this);
        this.handleCoverImageFile = this.handleCoverImageFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeUploadedStatus = this.changeUploadedStatus.bind(this);
    }

    handleGenre(e) {
        this.setState({genre: e.currentTarget.value})
    }

    handleCoverImageFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ coverImage: file, coverImageURL: fileReader.result });
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleTrackFile(e) {
        this.setState({trackFile: e.currentTarget.files[0]})
    }

    changeUploadedStatus () {
        this.setState({ ['uploaded']: true })
    }

    handleSubmit (e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('track[id]', this.state.id);
        formData.append('track[title]', this.state.title);
        formData.append('track[genre]', this.state.genre);
        if (this.state.coverImage) {
            formData.append('track[cover_image]', this.state.coverImage);
        };
        if (this.state.trackFile) {
            formData.append('track[track_file]', this.state.trackFile);
        };

        this.props.action(formData).then(
            this.setState({
                title: '',
                coverImage: null,
                trackFile: null,
                uploaded: false
            })
        ).then(this.changeUploadedStatus).then(this.props.closeModal)

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

        const preview = this.state.coverImageURL ? (
            <img className="cover-image-preview" src={this.state.coverImageURL} />
        ) : (
            <div className="upload-cover-image-msg">
                Choose an image to preview it here
            </div>
        )


        const uploadMsg = this.state.uploaded ? (
            <div>
                Success!
            </div>
        ) : (
            null
        )

        const form = this.props.formType === 'Create Track' ? (
            <div className="create-track-form-page-container">
                <div className="create-track-form-box">
                    <div>
                        <h3 className="create-track-form-header">Track Details</h3>
                    </div>

                    <div className="create-track-errors">
                        {this.props.errors.length !== 0 ? this.renderErrors() : " "}
                    </div>

                    <div className="create-track-form-under-header">
                        <div className="preview-image-holder">
                            {preview}
                        </div>

                        {uploadMsg}

                        <div className="create-track-form-container">
                            <div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="create-track-form">
                                        <div className="create-form-label-input-pair">
                                            <label className="create-form-labels">Title*</label>

                                            <input type="text"
                                                value={this.state.title}
                                                onChange={this.update('title')}
                                            />
                                        </div>


                                        <div className="create-form-label-input-pair">
                                            <label className="create-form-labels">Genre*</label>

                                            <select defaultValue="choose-genre" name="genre" id="genre" onChange={this.handleGenre}>
                                                <option value="choose-genre" disabled>Please select a genre</option>
                                                <option value="kpop">Kpop</option>
                                                <option value="indie">Indie</option>
                                                <option value="hip-hop-rap">Hip-Hop & Rap</option>
                                                <option value="pop">Pop</option>
                                                <option value="edm">EDM</option>
                                                <option value="anime">Anime</option>
                                                <option value="rock">Rock</option>
                                                <option value="rb">R&B</option>
                                            </select>
                                        </div>
                        
                                        <div className="create-form-label-input-pair">
                                            <label className="create-form-labels">Upload cover image </label>
                                            <label className="create-form-upload-btn">Choose a cover
                                                <input type="file"
                                                    onChange={this.handleCoverImageFile} />
                                            </label>
                                        </div>

                                        <div className="create-form-label-input-pair">
                                            <label className="create-form-labels">Upload track file* </label>
                                            <label className="create-form-upload-btn">Choose a track
                                                <input type="file"
                                                    onChange={this.handleTrackFile} />
                                            </label>
                                        </div>
                                    </div>

                                    <div><button className="create-track-form-save-btn">{this.props.formType}</button></div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        ) : (
                <div className="edit-track-form">
                    {uploadMsg}

                    {this.renderErrors()}

                    <br />

                    <form onSubmit={this.handleSubmit}>
                        <label>Track Title: </label>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                        />


                        <label>Genre:</label>
                        <select defaultValue="choose-genre" name="genre" id="genre" onChange={this.handleGenre}>
                            <option value="choose-genre" disabled>Please select a genre</option>
                            <option value="kpop">Kpop</option>
                            <option value="indie">Indie</option>
                            <option value="hip-hop-rap">Hip-Hop & Rap</option>
                            <option value="pop">Pop</option>
                            <option value="edm">EDM</option>
                            <option value="anime">Anime</option>
                            <option value="rock">Rock</option>
                            <option value="rb">R&B</option>
                        </select>

                        

                        <label>Upload image: </label>
                        <input type="file"
                            value=""
                            title=" "
                            onChange={this.handleCoverImageFile} />
                        
                        <label>Upload track file: </label>
                        <input type="file"
                            value=""
                            title=" "
                            onChange={this.handleTrackFile} />
                        

                        <button>{this.props.formType}</button>
                    </form>
                </div>
        )

        return (
            <div>
                {form}
            </div>
        )
    }

};

export default TrackForm;
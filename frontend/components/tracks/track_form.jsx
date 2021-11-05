import React from "react";

class TrackForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.props.track,
            coverImage: null,
            uploaded: false
        }
        
        this.handleGenre = this.handleGenre.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeUploadedStatus = this.changeUploadedStatus.bind(this);
    }

    handleGenre(e) {
        this.setState({genre: e.currentTarget.value})
        console.log(e.currentTarget.value)
        console.log(this.state)
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
        formData.append('track[id]', this.state.id);
        formData.append('track[title]', this.state.title);
        formData.append('track[genre]', this.state.genre);
        if (this.state.coverImage) {
            formData.append('track[cover_image]', this.state.coverImage);
        };

        this.props.action(formData).then(
            this.setState({
                title: '',
                coverImage: null,
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

        const uploadMsg = this.state.uploaded ? (
            <div>
                Success!
            </div>
        ) : (
            null
        )

        const genreValue = this.props.track.genre ? this.props.track.genre : '';

        return (
            <div>
                {uploadMsg}

                {this.renderErrors()}

                <br />

                <form onSubmit={this.handleSubmit}>
                    <label>Track Title: </label>
                    <input type="text"
                        value={this.state.title}
                        onChange={this.update('title')}
                    />
                    
                    <br />
                    
                    <label>Genre:</label>
                    <select value={genreValue} name="genre" id="genre" onChange={this.handleGenre}>
                        <option disabled>Please select a genre</option>
                        <option value="kpop">Kpop</option>
                        <option value="indie">Indie</option>
                        <option value="hip-hop-rap">Hip-Hop & Rap</option>
                        <option value="pop">Pop</option>
                        <option value="edm">EDM</option>
                        <option value="anime">Anime</option>
                        <option value="rock">Rock</option>
                        <option value="rb">R&B</option>
                    </select>
                    
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
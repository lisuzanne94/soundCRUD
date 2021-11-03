import React from "react";

class TrackForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            ...this.props.track,
            cover_Image: null
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
        // this.props.action(this.state).then(this.props.history.push('/discover'))
        // this.props.action(this.state).then(this.changeUploadedStatus())
        // this.setState({
        //     title: ''
        // })

        const formData = new FormData();
        formData.append('track[title]', this.state.title);
        formData.append('track[cover_image]', this.state.coverImage);

        this.props.action(formData)
            .then(this.props.history.push(`/discover`))
        // $.ajax({
        //     url: '/api/tracks',
        //     method:'POST',
        //     data: formData,
        //     contentType: false,
        //     processData: false
        // }).then((response) => console.log(response.message)),
        // (response) => console.log(response.responseJSON)
    };

    update (field) {
        return e => this.setState({ [field]: e.target.value })
    };

    render () {

        console.log(this.state)

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
                    <label>Upload image: </label>
                    <input type="file" 
                        onChange={this.handleFile}/>
                    <br />
                <button>{this.props.formType}</button>
                </form>
            </div>
        )
    }

};

export default TrackForm;
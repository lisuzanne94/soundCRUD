import React from "react";

class EditUser extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.user,
            profilePic: null,
            profilePicURL: null
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId)
    // }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ profilePic: file, profilePicURL: fileReader.result });
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', this.state.id);
        formData.append('user[profile_pic]', this.state.profilePic);

        this.props.updateUser(formData).then;
    }

    render() {

        const preview = this.state.profilePicURL ? <img src={this.state.profilePicURL} /> : null

        // if (!this.props.user) { return null }

        const { user } = this.props;

        return (
            <div>
                <h3>Image Preview</h3>
                {preview}

                <form onSubmit={this.handleSubmit}>
                    <input type="file"
                        onChange={this.handleFile}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

};

export default EditUser;
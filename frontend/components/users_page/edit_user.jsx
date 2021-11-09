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

        this.props.updateUser(formData).then(this.props.closeModal);
    }

    render() {

        const preview = this.state.profilePicURL ? (
                <img className="profile-pic-preview" src={this.state.profilePicURL} />
            ) : null

        if (!this.props.user) { return null }

        const { user, closeModal } = this.props;

        return (
            // <div className="edit-user-form-modal">
                <div className="edit-user-form-container">
                    <h3>{user.username}</h3>
                    {preview}

                    <form onSubmit={this.handleSubmit}>
                        <div className="edit-user-btns">
                            <input className="edit-user-btn" type="file"
                                onChange={this.handleFile}
                            />
                            <button className="edit-user-btn">Submit</button>
                        </div>
                    </form>
                </div>
            // </div>
        )
    }

};

export default EditUser;
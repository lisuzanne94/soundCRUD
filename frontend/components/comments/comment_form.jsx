import React from "react";

class CommentForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = { 
            ...this.props.comment
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    clearForm() {
        this.setState({ body: '' })
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.createComment(this.state)
            .then(this.clearForm())
    };

    render () {

        const { currentUser } = this.props;

        return (
            <div className="comment-form-container">
                <div><img className="comment-form-profile-pic" src={currentUser.profilePic} /></div>

                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" 
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="Write a comment"
                    />
                </form>

            </div>
        )
    }
};

export default CommentForm;
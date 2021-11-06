import React from "react";

class CommentForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = { 
            ...this.props.comment
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.createComment(this.state)
    };

    render () {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        value={this.state.body}
                        onChange={this.update("body")}
                    />
                </form>
            </div>
        )
    }
};

export default CommentForm;
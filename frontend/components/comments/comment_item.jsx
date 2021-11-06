import React from "react";

class CommentItem extends React.Component {

    render () {

        if (!this.props.comments) { return null }

        const { comments, deleteComment } = this.props;

        return (
            <div className="comments-index-container">
                <ul>
                    {
                        comments.map((comment, i) => (
                            <li key={i}>
                                {comment.body}
                                <br />
                                <button onClick={() => deleteComment(comment.id)}>Delete</button>
                                <br />
                                {comment.commenter.username}
                                <br />
                                <br />
                            </li>
                        ))
                        
                    }
                </ul>
            </div>
        )
    }
}

export default CommentItem;
import React from "react";

class CommentItem extends React.Component {

    render () {

        if (!this.props.comments) { return null }

        const { comments, currentUserId, deleteComment } = this.props;

        return (
            <div className="comments-index-container">
                <ul>
                    {
                        comments.map((comment, i) => (
                            <li key={i}>
                                {comment.body}
                                <br />
                                {
                                    currentUserId === comment.commenter.id ? (
                                        <button onClick={() => deleteComment(comment.id)}>Delete</button>
                                    ) : null
                                }
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
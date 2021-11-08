import React from "react";

class CommentItem extends React.Component {

    render () {

        if (!this.props.comments) { return null }

        const { comments, currentUser, deleteComment } = this.props;


        return (
            <div className="comments-index-container">
                <ul>
                    {
                        comments.map((comment, i) => (
                            <li key={i}>
                                <div className="comment-obj-container">
                                    <div className="comment-obj">
                                        <img className="comment-profile-pic" src={currentUser.profilePic} />
                                        <div className="comment-body">
                                            <div>{comment.commenter.username}</div>
                                            <div>{comment.body}</div>
                                        </div>
                                    </div>
                                    {
                                        currentUser.id === comment.commenter.id ? (
                                            <button onClick={() => deleteComment(comment.id)}>Delete</button>
                                        ) : null
                                    }

                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default CommentItem;
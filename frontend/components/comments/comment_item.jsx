import React from "react";

class CommentItem extends React.Component {

    render () {

        if (!this.props.comments) { return null }

        const { comments, currentUserId, currentUserProfilePic, deleteComment } = this.props;


        return (
            <div className="comments-index-container">
                <ul>
                    {
                        comments.map((comment, i) => (
                            <li key={i}>
                                <div className="comment-obj-container">
                                    <div className="comment-obj">
                                        <img className="comment-profile-pic" src={currentUserProfilePic} />
                                        <div className="comment-body">
                                            <div>{comment.commenter.username}</div>
                                            <div>{comment.body}</div>
                                        </div>
                                    </div>
                                    {
                                        currentUserId === comment.commenter.id ? (
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
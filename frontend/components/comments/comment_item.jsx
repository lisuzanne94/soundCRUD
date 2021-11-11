import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

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
                                        <Link to={`/users/${comment.commenter.id}`}><img className="comment-profile-pic" src={comment.commenter.profilePic} /></Link>
                                        <div className="comment-body">
                                            <Link className="comment-commenter-username" to={`/users/${comment.commenter.id}`}>{comment.commenter.username}</Link>
                                            <div className="comment-body-text">{comment.body}</div>
                                        </div>
                                    </div>

                                    <div className="comment-obj-right">
                                        <div className="comment-time-ago">{comment.commentCreatedTime && comment.commentCreatedTime.includes("about") ? comment.commentCreatedTime.slice(6) : comment.commentCreatedTime}</div>

                                    {
                                        currentUser.id === comment.commenter.id ? (
                                            <button className="delete-comment-btn"
                                                onClick={() => deleteComment(comment.id)}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        ) : null
                                    }
                                    </div>
                                    
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
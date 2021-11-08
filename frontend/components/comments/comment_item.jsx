import React from "react";
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
                                        <img className="comment-profile-pic" src={currentUser.profilePic} />
                                        <div className="comment-body">
                                            <div className="commenter-username">{comment.commenter.username}</div>
                                            <div className="comment-body-text">{comment.body}</div>
                                        </div>
                                    </div>
                                    {
                                        currentUser.id === comment.commenter.id ? (
                                            <button className="delete-comment-btn"
                                                onClick={() => deleteComment(comment.id)}>
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
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
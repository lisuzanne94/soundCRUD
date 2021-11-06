import React from "react";

class CommentItem extends React.Component {

    render () {

        if (!this.props.comments) { return null }

        const { comments } = this.props;

        return (
            <div className="comments-index-container">
                <ul>
                    {
                        comments.map((comment, i) => (
                            <li key={i}>
                                {comment.body}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default CommentItem;
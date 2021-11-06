import React from "react";

class CommentItem extends React.Component {

    render () {

        if (!this.props.comment) { return null }

        return (
            <div>
                {this.props.body}
            </div>
        )
    }
}

export default CommentItem;
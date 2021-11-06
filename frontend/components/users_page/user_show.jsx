import React from "react";

class UserShow extends React.Component {

    componentDidMount () {
        this.props.fetchUser(this.props.match.params.userId)
    }

    render () {

        const { userId } = this.props;

        return (
            <div>
                {userId}
            </div>
        )
    }
};

export default UserShow;
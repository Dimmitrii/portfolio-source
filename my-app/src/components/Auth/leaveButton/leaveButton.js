import React from 'react'

import withAuthMethods from "../WithAuthMethods";

class LeaveButton extends React.Component {
    render() {
        return (
            <button type="button" className="btn btn-danger float-right" onClick={this.props.leave}>Leave</button>
        )
    }
}

export default withAuthMethods(LeaveButton);
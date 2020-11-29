import React from 'react';
import '../App.css';
import axios from 'axios';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.props.parent.child.logout = this;
    }


    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.onHandleLogout}>
                    Profile
                </button>
            </div>

        )
    }
}
export default Logout;
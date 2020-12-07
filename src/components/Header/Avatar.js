import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from './Logout';

class Avatar extends React.Component {
    render() {
        if (this.props.logged === false) return '';
        return (
            <div className="dropdown">
                <button type="button" className="rounded-circle" data-toggle="dropdown">
                    <img className="avatar-icon" alt="a" src={"https://triipme.s3.amazonaws.com/avatar.png?crop=faces&amp;fit=crop&amp;h=70&amp;w=70"} />
                </button>
                <div className="dropdown-menu">
                    <Link to="/profile/account">Profile</Link>
                    <br />
                    <Logout />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logged: state.logged
    }
}

export default connect(mapStateToProps)(Avatar);
import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/index';
import { Link } from 'react-router-dom';

class Logout extends React.Component {

    onHandleLogout = () => {
        this.props.logout();
    }

    render() {
        if (this.props.logged === false) return '';
        return (
            <Link to="/" className="text-primary" onClick={this.onHandleLogout}>
                Logout
            </Link>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        logged: state.logged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
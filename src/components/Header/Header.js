import React from 'react'
import Login from './Login'
import Register from './Register';
import { connect } from 'react-redux';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';


class Header extends React.Component {


    render() {
        return (
            <div className="shadow header">
                <div className="container d-flex justify-content-between">
                    <Link to="/">
                        <img className="my-auto" src="https://www.triip.me/assets/img/triip_tiim_logo.png" alt="logo" style={{ width: 50, height: 50 }}></img>
                    </Link>
                    <div className="my-auto">
                        <Link to="/CreateTrip" className="h4 p-3 text-dark">Create trip</Link>
                        <Link to="/" className="h4 p-3 text-dark">Experience</Link>
                    </div>
                    <div className="my-auto">
                        <Register />
                        <Login />
                        <Avatar />
                    </div>
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

export default connect(mapStateToProps, null)(Header);

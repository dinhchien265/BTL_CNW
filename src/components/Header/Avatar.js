import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import * as StringConstant from './../../constants/String';

class Avatar extends React.Component {
    render() {
        if (this.props.logged === false) return '';
        return (
            <div className="dropdown">
                <button type="button" style={{width:"50px", height:"50px"}} className="rounded-circle"  data-toggle="dropdown">
                    <img 
                    style={{position: "absolute",
                    alignContent:"center",
                        margin: "2.2px",
                        top: 0,
                        left: 0,
                        width: "90%",
                        height: "90%",
                        objectfit: "inherit",borderRadius: '50%'}}
                    className="avatar" alt="a" src={StringConstant.IMAGE_PATH + localStorage.getItem('avatar_user')}/>
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
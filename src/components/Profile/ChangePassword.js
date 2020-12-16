import React from 'react';
import axios from 'axios';
import * as StringConstant from '../../constants/String';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";


class ChangePassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            oldPass: '',
            newPass: '',
            confirm: '',
        }

    }


    changePassword = () => {
        if (this.state.newPass !== this.state.confirm) {
            alert("Xac nhan mat khau chua chinh xac");
            return;
        }
        axios({
            method: 'POST',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/reset-password',
            headers: {
                Authorization: "Bearer" + localStorage.getItem("token")
            },
            data: {
                new_password: this.state.newPass,
                old_password: this.state.oldPass
            }
        }).then((response) => {
            // handle success
            console.log(response.data);
            console.log(this.props);
            this.props.history.push("/profile/account");
            console.log("abc");
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleFile = (event) => {
        this.setState({
            file: event.target.files[0]
        })
    }


    render() {
        return (
            <div>
                <div>Old Password</div>
                <input className="form-control" type="password" value={this.state.name} name="oldPass" onChange={this.onChange} />
                <div>New Password</div>
                <input className="form-control" type="password" value={this.state.email} name="newPass" onChange={this.onChange} />
                <div>Confirm</div>
                <input className="form-control" type="password" value={this.state.phone} name="confirm" onChange={this.onChange} />

                <button className="btn btn-info m-3" onClick={this.changePassword}>Save</button>
                <Link to="/profile/account">
                    <button className="btn btn-info">Cancel</button>
                </Link>
            </div>
        )
    }
}
export default withRouter(ChangePassword);
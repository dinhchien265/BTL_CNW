
import React from 'react';
import axios from 'axios';
import { login } from '../actions';
import { connect } from 'react-redux';
import * as types from './../constants/ActionType';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }


    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    onHandleLogin = () => {
        axios({
            method: 'POST',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/login',
            data: {
                email: this.state.email,
                password: this.state.password
            }
        }).then((response) => {
            // handle success
            localStorage.setItem("token", response.data.token);
            this.props.login();
            console.log(response.data.token);
        }).catch((error) => {
            // handle error
            console.log(error);
        });
        document.getElementById("close-login").click();
    }


    render() {
        if (this.props.logged === true) return '';
        return (
            <span className="container">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#login">
                    Login
                </button>


                <div className="modal fade" id="login">
                    <div className="modal-dialog">
                        <div className="modal-content">


                            <div className="modal-header">
                                <h4 className="modal-title">Login</h4>
                                <button id="close-login" type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>


                            <div className="modal-body">
                                <input className="w-100 p-2 m-2" type="email" placeholder="E-mail" onChange={this.onChange} name='email' value={this.state.email} />
                                <br />
                                <input className="w-100 p-2 m-2" type="password" placeholder="Password" onChange={this.onChange} name='password' value={this.state.password} />
                            </div>


                            <div className="modal-footer">
                                <button type="button" className="btn btn-info">Fogot password</button>
                                <button type="button" className="btn btn-info" onClick={this.onHandleLogin} >Login</button>
                            </div>


                        </div>
                    </div>
                </div>

            </span>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        logged: state.logged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(login())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirm = '';
    }

    onRecvRespone = (respone) => {
        console.log(respone);
    }

    onHandleRegist = () => {
        if (this.state.password !== this.state.confirm) {
            alert("Xac nhan khong chinh xac");
            return;
        }
        axios({
            method: 'POST',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/register',
            data: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
        }).then(function (response) {
            // handle success
            alert("Dang ky thanh cong");
            console.log(response);
        }).catch(function (error) {
            // handle error
            alert("Email da ton tai");
            console.log(error);
        });
        document.getElementById("close-register").click();
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        if (this.props.logged === true) return '';
        return (
            <span className="container">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#register">
                    Register
                </button>
                <div className="modal fade" id="register">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Register</h4>
                                <button id="close-register" type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                                <input className="w-100 p-2 m-2" type="text" placeholder="Name" name="name" onChange={this.onChange} required />
                                <br />
                                <input className="w-100 p-2 m-2" type="email" placeholder="E-mail" name="email" onChange={this.onChange} required />
                                <br />
                                <input className="w-100 p-2 m-2" type="password" placeholder="Password" name="password" onChange={this.onChange} required />
                                <br />
                                <input className="w-100 p-2 m-2" type="password" placeholder="Confirm" name="confirm" onChange={this.onChange} required />
                            </div>


                            <div className="modal-footer">
                                <button type="submit" className="btn btn-info" onClick={this.onHandleRegist} >Regist</button>
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

export default connect(mapStateToProps)(Register);
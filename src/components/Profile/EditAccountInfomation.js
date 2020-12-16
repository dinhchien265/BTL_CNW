import React from 'react';
import axios from 'axios';
import * as StringConstant from '../../constants/String';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";


class EditAccountInfomation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            avatar: '',
            file: '',
            file2:'',
            cover: ''
        }

    }

    componentWillMount() {
        axios({
            method: 'GET',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/profile/getUserInfo',
            headers: {
                Authorization: "Bearer" + localStorage.getItem("token")
            },
            data: null
        }).then((response) => {
            // handle success
            console.log(response.data);
            console.log("why????")
            localStorage.setItem("avatar_user",response.data.data.avatar);
            console.log("hahaha",localStorage.getItem("avatar_user"))
            // this.state.name = response.name;
            // this.state.email = response.email;
            this.setState({
                name: response.data.data.name,
                email: response.data.data.email,
                phone: response.data.data.phone,
                address: response.data.data.address,
                avatar: response.data.data.avatar,
                cover: response.data.data.cover

            })
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }

    updateUserInfo = () => {
        let file = this.state.file;
        let file2 = this.state.file2
        if (file !== '') {
            let formData = new FormData();
            formData.append('avatar', file);
            console.log(file);
            for (var key of formData.entries()) {
                console.log(key[1]);
            }
            axios({
                method: 'POST',
                url: 'https://mighty-retreat-21374.herokuapp.com/api/profile/editAvatar',
                headers: {
                    Authorization: "Bearer" + localStorage.getItem("token")
                },
                data: formData

            }).then((response) => {
                // handle success
 
                console.log(response.data);
            }).catch((error) => {
                // handle error
                console.log(error);
            });
        }

        if (file2 !== '') {
            let formData2 = new FormData();
            formData2.append('cover', file2);
            console.log(file2);
            for (var key of formData2.entries()) {
                console.log(key[1]);
            }
            axios({
                method: 'POST',
                url: 'https://mighty-retreat-21374.herokuapp.com/api/profile/editCover?token=' + localStorage.getItem("token"),
                data: formData2

            }).then((response) => {
                // handle success
                console.log(response.data);
            }).catch((error) => {
                // handle error
                console.log(error);
            });
        }

        axios({
            method: 'PUT',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/profile/editUserInfo',
            headers: {
                Authorization: "Bearer" + localStorage.getItem("token")
            },
            data: {
                phone: this.state.phone,
                address: this.state.address
            }
        }).then((response) => {
            // handle success
            console.log(response.data);
            console.log(this.props);
            window.location.href="/profile/account";
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
    handleFile2 = (event) => {
        this.setState({
            file2: event.target.files[0]
        })
    }


    render() {
        return (
            <div>
                <label className="cover-container" htmlFor="cover-upload">
                    <i className="fa fa-pencil icon-edit-avatar" aria-hidden="true">
                    </i>
                    <div className="banner" style={{ backgroundImage: "url(" + StringConstant.IMAGE_PATH + this.state.cover + ")" }}></div>
                    <p className="text-center">Cover</p>
                    <input id="cover-upload" type="file" className="input-image" onChange={this.handleFile2}></input>
                </label>
                <br />
                <span className="h3">Account infomation</span>
                <br />
                <label className="avatar-container" htmlFor="avatar-upload">
                    <i className="fa fa-pencil icon-edit-avatar" aria-hidden="true">
                    </i>
                    <img className="avatar" alt="a" src={StringConstant.IMAGE_PATH + this.state.avatar} />
                    <p className="text-center">avatar</p>
                    <input id="avatar-upload" type="file" className="input-image" onChange={this.handleFile}></input>
                </label>
                <div>Name</div>
                <input className="form-control" type="text" value={this.state.name} name="name" onChange={this.onChange} />
                <div>Email</div>
                <input className="form-control" type="text" value={this.state.email} name="email" onChange={this.onChange} />
                <div>Phone</div>
                <input className="form-control" type="text" value={this.state.phone} name="phone" onChange={this.onChange} />
                <div>Address</div>
                <input className="form-control" type="text" value={this.state.address} name="address" onChange={this.onChange} />

                <button className="btn btn-info m-3" onClick={this.updateUserInfo}>Save</button>
                <Link to="/profile/account">
                    <button className="btn btn-info">Cancel</button>
                </Link>
            </div>
        )
    }
}
export default withRouter(EditAccountInfomation);
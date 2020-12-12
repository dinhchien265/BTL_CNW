import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as StringConstant from '../../constants/String';


class AccountInfomation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            avatar: ''
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
            // this.state.name = response.name;
            // this.state.email = response.email;
            this.setState({
                name: response.data.data.name,
                email: response.data.data.email,
                phone: response.data.data.phone,
                address: response.data.data.address,
                avatar: response.data.data.avatar
            })
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }


    render() {

        return (
            <div>
                <span className="h3">Account infomation</span>
                <Link to="/profile/account/edit" className="h3 ml-5 text-primary">Edit</Link>
                <br />
                <img className="avatar" alt="avatar" src={StringConstant.IMAGE_PATH + this.state.avatar} />
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>Phone: {this.state.phone}</p>
                <p>Address: {this.state.address}</p>
            </div>
        );
    }
}

export default AccountInfomation;
import React from 'react';
import axios from 'axios';


class AccountInfomation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
        }

    }

    componentWillMount() {
        axios({
            method: 'GET',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/user-info?token=' + localStorage.getItem("token"),
            data: null
        }).then((response) => {
            // handle success
            console.log(response.data);
            // this.state.name = response.name;
            // this.state.email = response.email;
            this.setState({
                name: response.data.user.name,
                email: response.data.user.email
            })
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }

    render() {

        return (
            <div>
                <h3>Account infomation</h3>
                <img className="avatar" alt="a" src={"https://triipme.s3.amazonaws.com/avatar.png?crop=faces&amp;fit=crop&amp;h=70&amp;w=70"} />
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
            </div>
        );
    }
}

export default AccountInfomation;
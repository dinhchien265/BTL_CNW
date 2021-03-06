import React from 'react';
import axios from 'axios';
import * as StringConstants from './../../constants/String';

class CreateComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            avatar: '',
            comment: ''
        }
    }

    componentDidMount() {
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
                avatar: response.data.data.avatar
            })
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }

    createComment = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/comment/create/' + localStorage.getItem("param"),
            headers: {
                Authorization: "Bearer" + localStorage.getItem("token")
            },
            data: {
                comment: this.state.comment
            }
        }).then((response) => {
            // handle success
            console.log(response.data);
            window.location.reload();
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

    render() {
        return (
            <div className="row">

                <form className="col-10 my-auto" onSubmit={this.createComment}>
                    <input className="form form-control" name="comment" onChange={this.onChange} />
                </form>
                <div className="col-2">
                    <img className="comment-avatar" src={StringConstants.IMAGE_PATH + this.state.avatar} alt="avatar" />
                </div>
            </div>
        )
    }
}
export default CreateComment;
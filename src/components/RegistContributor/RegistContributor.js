import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class RegistContributor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            intro: '',
            address: '',
            languages: '',
            experiences: '',
            role: ''
        }
    }

    regist = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/user/update?token=' + localStorage.getItem("token"),
            data: {
                intro: this.state.intro,
                languages: this.state.languages,
                address: this.state.address,
                experiences: this.state.experiences
            }
        }).then((response) => {
            // handle success
            console.log(response.data);
            alert(response.data.message)
            this.props.history.push("/");
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

    cancel = (event) => {
        event.preventDefault();
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="container mt-5" >
                <p className="h2 text-primary text-center">Regist contributor to create trip</p>
                <p className="h2 text-primary text-center">Share your experience to other people and gain money</p>
                <form onSubmit={this.regist}>
                    <label>Intro</label>
                    <input type="text" className="form form-control" name="intro" onChange={this.onChange} value={this.state.intro} required />
                    <label>languages</label>
                    <input type="text" className="form form-control" name="languages" onChange={this.onChange} value={this.state.languages} required />
                    <label>Address</label>
                    <input type="text" className="form form-control" name="address" onChange={this.onChange} value={this.state.address} required />
                    <label>experiences</label>
                    <input type="text" className="form form-control" name="experiences" onChange={this.onChange} value={this.state.experiences} required />

                    <input type="submit" className="btn btn-info m-1" value="Send"></input>
                    <button className="btn btn-info m-1" onClick={this.cancel}>Cancel</button>
                </form>
            </div>
        )
    }
}
export default withRouter(RegistContributor);
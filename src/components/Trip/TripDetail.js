import React from 'react';
import * as StringConstant from './../../constants/String';
import axios from 'axios';
import ListComment from '../Comment/ListComment';
import CreateComment from '../Comment/CreateComment';

class TripDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trip: '',
            date: '',
            participants: 0
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/trip/byId?trip_id=' + localStorage.getItem("param"),
            data: null
        }).then((response) => {
            // handle success
            console.log(response.data);
            // this.state.name = response.name;
            // this.state.email = response.email;
            this.setState(
                response.data
            )
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

    requestTrip = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/order/create/' + localStorage.getItem("param") + "?token=" + localStorage.getItem("token"),
            data: {
                date: this.state.date,
                participants: this.state.participants
            }
        }).then((response) => {
            // handle success
            console.log(response.data);
            // this.state.name = response.name;
            // this.state.email = response.email;
            this.setState(
                response.data
            )
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }

    render() {
        if (this.state === null) return null;
        console.log("avatar",  this.state.avatar)
        return (
            <div>
                <div className="banner" style={{ backgroundImage: "url(" + StringConstant.IMAGE_PATH + this.state.trip.cover + ")" }}></div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-6">
                            <div className="h1">
                                Tour infomation
                        </div>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Location</td>
                                        <td>{this.state.trip.location}</td>
                                    </tr>
                                    <tr>
                                        <td>Duration</td>
                                        <td>{this.state.trip.duration} Hours</td>
                                    </tr>
                                    <tr>
                                        <td>Departure</td>
                                        <td>{this.state.trip.departure} Hours</td>
                                    </tr>
                                    <tr>
                                        <td>Price per Participant</td>
                                        <td>{this.state.trip.price} VND</td>
                                    </tr>
                                    <tr>
                                        <td>languages</td>
                                        <td>{this.state.trip.languages}</td>
                                    </tr>
                                    <tr>
                                        <td>Group-size</td>
                                        <td>{this.state.trip.group_size}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-6">
                            <form onSubmit={this.requestTrip}>
                                <div className="h1">{this.state.trip.price} VND</div>
                                <div className="form-group">
                                    <label htmlFor="date">Date:</label>
                                    <input type="date" className="form-control" name="date" onChange={this.onChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="participants">Participants:</label>
                                    <input type="number" className="form-control" min="0" max={this.state.trip.group_size} name="participants" onChange={this.onChange} value={this.state.participants} required />
                                </div>
                                <p>Total: {this.state.participants * this.state.trip.price} VND</p>

                                <input type="submit" value="Request this trip" />
                            </form>
                        </div>
                    </div>
                    <div className="h1">
                        Description
                    </div>
                    <p>{this.state.trip.description}</p>
                    <div className="h1">
                        Comment
                    </div>
                    <ListComment trip_id={localStorage.getItem("param")} />
                    <CreateComment />
                </div>
            </div>
        )
    }

}

export default TripDetail;
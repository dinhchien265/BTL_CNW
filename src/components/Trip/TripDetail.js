import React from 'react';
import * as StringConstant from './../../constants/String';
import axios from 'axios';

class TripDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trip: '',
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
            participants: event.target.value
        })
    }

    render() {
        if (this.state === null) return null;

        return (
            <div >
                <div className="banner" style={{ backgroundImage: "url(" + StringConstant.IMAGE_PATH + this.state.trip.cover + ")" }}></div>
                <div className="container">
                    <div className="row">
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
                                        <td>Language</td>
                                        <td>{this.state.trip.language}</td>
                                    </tr>
                                    <tr>
                                        <td>Group-size</td>
                                        <td>{this.state.trip.group_size}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-6">
                            <form>
                                <div className="h1">{this.state.trip.price} VND</div>
                                <div className="form-group">
                                    <label htmlFor="date">Date:</label>
                                    <input type="date" className="form-control" id="date" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="participants">Participants:</label>
                                    <input type="number" className="form-control" id="participants" onChange={this.onChange} />
                                </div>
                                <p>Total: {this.state.participants * this.state.trip.price}</p>

                                <input type="submit" value="Request this trip" />
                            </form>
                        </div>
                    </div>
                    <div className="h1">
                        Description
                        </div>
                    <p>{this.state.trip.description}</p>
                    <img src="https://btl-storage.s3-ap-southeast-1.amazonaws.com/coverTrip/1607355784_download.jpeg" alt="." />
                </div>
            </div>
        )
    }

}

export default TripDetail;
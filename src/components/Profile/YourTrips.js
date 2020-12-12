import React from 'react';
import axios from 'axios';
import TripList from './../Trip/TripList';
import Trip from './../Trip/Trip';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";


class YourTrip extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tripList: []
        };
    }

    componentWillMount() {
        axios({
            method: 'GET',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/trip/user',
            headers: {
                Authorization: "Bearer" + localStorage.getItem("token")
            },
            data: null
        }).then((response) => {
            // handle success
            console.log("abc", response.data);
            this.setState({
                tripList: response.data.trips
            })
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    {this.showTripList()}
                </div>
            </div>
        )
    }

    showTripList = () => {
        let tripList;
        tripList = this.state.tripList.map((trip, index) => {
            return (
                <Link className="col-4 mt-3" key={index} to={"/profile/edit-trip/" + trip.id} onClick={() => localStorage.setItem("param", trip.id)}>
                    <Trip trip={trip} />
                </Link>
            )
        })
        return tripList;
    }
}
export default YourTrip;
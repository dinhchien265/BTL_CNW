import React from 'react';
import axios from 'axios';
import Trip from './Trip';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import TripList from './TripList';


class CityTrips extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tripList: [],
            city: ''
        }
        let url = window.location.href;
        this.state.city = url.substring(url.lastIndexOf("/") + 1);
    }

    componentWillMount() {
        axios({
            method: 'GET',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/trip/city/' + this.state.city,
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
        console.log("render CityTrip");
        console.log(this.state.tripList);
        return (
            <TripList tripList={this.state.tripList} />
        )
    }

    showTripList = () => {
        let tripList;
        console.log(this.state.tripList);
        tripList = this.state.tripList.map((trip, index) => {
            return (
                <Trip key={index} trip={trip} />
            )
        })
        return tripList;
    }
}

export default CityTrips;
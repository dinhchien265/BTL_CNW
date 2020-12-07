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


class TripList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tripList: this.props.tripList,
        }
    }


    render() {
        console.log("render TripList");
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
        tripList = this.props.tripList.map((trip, index) => {
            return (
                <Link className="col-4 mt-3" key={index} to={"/TripDetail/" + trip.id} onClick={() => localStorage.setItem("param", trip.id)}>
                    <Trip trip={trip} />
                </Link>
            )
        })
        return tripList;
    }
}

export default TripList;
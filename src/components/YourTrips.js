import React from 'react';
import axios from 'axios';
import TripList from './TripList';


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
            url: 'https://mighty-retreat-21374.herokuapp.com/api/trip/user?token=' + localStorage.getItem("token"),
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
            <TripList tripList={this.state.tripList} />
        )
    }
}
export default YourTrip;
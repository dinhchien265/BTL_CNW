import React from 'react';
import { connect } from 'react-redux';
import Place from './Place';
import axios from 'axios';
import * as StringConstant from '../../constants/String';

class PlaceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { city: [] };
    }

    componentWillMount() {
        axios({
            method: 'GET',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/trip/city',
            data: null
        }).then((response) => {
            // handle success
            console.log(response.data);
            // this.state.name = response.name;
            // this.state.email = response.email;
            this.setState({
                city: response.data.city
            });
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }

    render() {
        let element = this.state.city.map((trip, index) => {
            return (
                <Place key={index} name={trip.city} image={StringConstant.IMAGE_PATH + "city/" + trip.city + ".jpg"} />
            )
        })
        return (
            <div className="container pt-5">
                <p className="h2 text-primary text-center">TRAVELERS LOVE THESE PLACES</p>
                <p className="text-secondary text-center">Thousand cities in 227 countries, with our unique local experiences</p>
                <div className="row">
                    {element}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tripPlace: state.placeList
    }
}

export default connect(mapStateToProps, null)(PlaceList);
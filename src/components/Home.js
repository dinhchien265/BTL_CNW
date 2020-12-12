import React from 'react';
import '../App.css';
import PlaceList from './Place/PlaceList';
import SearchList from './Search/SearchList';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import { withRouter } from "react-router-dom";
import TripList from './Trip/TripList';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            tripList: []
        }
    }

    search = (event) => {
        // event.preventDefault();
        axios({
            method: 'POST',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/trip/search',
            data: {
                query: this.state.search
            }
        }).then((response) => {
            // handle success
            console.log(response.data);
            // this.state.name = response.name;
            // this.state.email = response.email;
            this.setState({
                tripList: response.data.trips
            })
        }).catch((error) => {
            // handle error
            console.log(error);
        });

        this.props.history.push("/home/search");
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="banner" style={{ backgroundImage: "url(https://www.triip.me/app/assets/img/home/home-banner-4.jpg)" }}>
                    <div className="pt-5">
                        <h1 className="text-white text-center pt-5">Book a stay & shopping tours<br />by locals seamlessly</h1>
                        <h6 className="text-white text-center">The happiest way to travel in 227 countries</h6>
                    </div>
                    <form className="search-box container row mx-auto mt-5" onSubmit={this.search}>
                        <input className="col-8 h-100 m-3" type="text" name="search" onChange={this.onChange} />
                        <input type="submit" className="col-3 h-100 m-3" value="Let's go" />
                    </form>
                </div>
                <Switch>
                    <Route exact path="/home/search">
                        <TripList tripList={this.state.tripList} />
                    </Route>
                    <Route path="/">
                        <PlaceList />
                    </Route>
                </Switch>

            </div>

        )
    }
}
export default withRouter(Home);
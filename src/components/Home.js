import React from 'react';
import '../App.css';
import PlaceList from './PlaceList';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="home-banner">
                    <div className="pt-5">
                        <h1 className="text-white text-center pt-5">Book a stay & shopping tours<br />by locals seamlessly</h1>
                        <h6 className="text-white text-center">The happiest way to travel in 227 countries</h6>
                    </div>
                    <div className="search-box container row mx-auto mt-5">
                        <input className="col-8 h-100 m-3" type="text" name="trip"></input>
                        <button className="col-3 h-100 m-3">Let's go</button>
                    </div>
                </div>
                <PlaceList />

            </div>

        )
    }
}
export default Home;
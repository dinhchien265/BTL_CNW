import React from 'react';
import { Link } from 'react-router-dom';

class Trip extends React.Component {
    render() {
        return (
            <div className="col-3 mt-4" >
                <Link to={"/CityTrip/" + this.props.name} className="d-flex h-100">
                    <div className="p-3 h-100 my-auto w-100 h-100 d-flex" style={{ backgroundImage: "url(" + this.props.image + ")", backgroundPosition: "center" }} >
                        <p className="h2 text-white p-5 text-center mx-auto my-auto">{this.props.name}</p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Trip;
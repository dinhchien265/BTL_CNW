import React from 'react';
import * as StringConstant from './../../constants/String';

class Trip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tripInfo: props.trip,
            description: ''
        }
        console.log(this.state.tripInfo)
    }
    render() {

        return (
            <div onMouseOver={this.showDescription} onMouseOut={this.hideDescription}>
                <div className="trip d-flex" style={{ backgroundImage: "url(" + StringConstant.IMAGE_PATH + this.state.tripInfo.cover + ")", backgroundPosition: "center" }}>
                    <span className="topright">{this.state.tripInfo.price + " VND"}</span>
                    <span className="mx-auto my-auto text-center w-50">{this.state.description}</span>
                </div>
            </div>
        )
    }
    showDescription = () => {
        this.setState({
            description: this.props.trip.description
        })
    }
    hideDescription = () => {
        this.setState({
            description: ''
        })
    }
}

export default Trip;
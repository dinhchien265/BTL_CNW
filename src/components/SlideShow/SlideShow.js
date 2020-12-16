import React from "react";
import { Zoom } from "react-slideshow-image";
import axios from 'axios';
import * as StringConstant from '../../constants/String';


const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
};
class SlideShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
            ]
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/trip/getImage/' + this.props.tripId,
            headers: {
                Authorization: "Bearer" + localStorage.getItem("token")
            },
            data: null
        }).then((response) => {
            // handle success
            console.log(response.data);
            // this.state.name = response.name;
            // this.state.email = response.email;
            this.setState({
                images: response.data.image_trip
            })
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }

    render() {
        if (this.state.images == null) {
            return null;
        }
        return (

            <div className="slide-container">
                <Zoom {...zoomOutProperties}>
                    {this.state.images.map((each, index) => (
                        <img key={index} style={{ width: "100%" }} src={StringConstant.IMAGE_PATH + each.path} />
                    ))}
                </Zoom>
            </div>
        )
    }
}


export default SlideShow;
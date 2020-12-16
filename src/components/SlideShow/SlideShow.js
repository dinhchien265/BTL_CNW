import React from "react";
import { Zoom } from "react-slideshow-image";


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
                "https://uploads.codesandbox.io/uploads/user/9bb33ddb-fe77-4a9c-80fe-ddd9ae0be9f9/LMZe-slide_2.jpg",
                "https://uploads.codesandbox.io/uploads/user/9bb33ddb-fe77-4a9c-80fe-ddd9ae0be9f9/HhJR-slide_3.jpg",
                "https://uploads.codesandbox.io/uploads/user/9bb33ddb-fe77-4a9c-80fe-ddd9ae0be9f9/q_Qy-slide_5.jpg",
                "https://uploads.codesandbox.io/uploads/user/9bb33ddb-fe77-4a9c-80fe-ddd9ae0be9f9/S97O-slide_1.jpg"
            ]
        }
    }
    render() {
        return (
            <div className="slide-container">
                <Zoom {...zoomOutProperties}>
                    {this.state.images.map((each, index) => (
                        <img key={index} style={{ width: "100%" }} src={each} />
                    ))}
                </Zoom>
            </div>
        )
    }
}


export default SlideShow;
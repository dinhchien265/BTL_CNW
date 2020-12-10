import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class EditTrip extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            location: '',
            duration: '',
            departure: '',
            price: '',
            languages: '',
            group_size: '',
            city: '',
            file: ''
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/trip/byId?trip_id=' + localStorage.getItem("param"),
            data: null
        }).then((response) => {
            // handle success
            console.log(response.data);
            // this.state.name = response.name;
            // this.state.email = response.email;
            this.setState({
                name: response.data.trip.name,
                description: response.data.trip.description,
                location: response.data.trip.location,
                duration: response.data.trip.duration,
                departure: response.data.trip.departure,
                price: response.data.trip.price,
                languages: response.data.trip.languages,
                group_size: response.data.trip.group_size,
                city: response.data.trip.city,
                file: ''
            })
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }

    editTrip = (event) => {
        event.preventDefault();
        console.log("abc");
        axios({
            method: 'PUT',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/trip/edit?token=' + localStorage.getItem("token"),
            data: {
                trip_id: localStorage.getItem("param"),
                name: this.state.name,
                description: this.state.description,
                location: this.state.location,
                duration: this.state.duration,
                departure: this.state.departure,
                price: this.state.price,
                languages: this.state.languages,
                group_size: this.state.group_size,
                city: this.state.city,

            }
        }).then((response) => {
            // handle success
            console.log(response.data);
            let id = response.data.trip.id;
            let file = this.state.file;
            console.log(file);
            if (file !== '') {
                let formData = new FormData();
                formData.append('cover', file);
                console.log(file);
                for (var key of formData.entries()) {
                    console.log(key[1]);
                }
                axios({
                    method: 'POST',
                    url: 'https://mighty-retreat-21374.herokuapp.com/api/trip/updateCover/' + id + '?token=' + localStorage.getItem("token"),
                    data: formData
                }).then((response) => {
                    // handle success
                    console.log(response.data);
                    alert("Success");
                    this.props.history.push("/profile/your-trip");
                }).catch((error) => {
                    // handle error
                    console.log(error);
                });

            }
            else this.props.history.push("/profile/your-trip");
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleFile = (event) => {
        this.setState({
            file: event.target.files[0]
        })
    }
    deleteTrip = (event) => {
        event.preventDefault();
        axios({
            method: 'DELETE',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/trip/delete?token=' + localStorage.getItem("token"),
            data: {
                trip_id: localStorage.getItem("param")
            }

        }).then((response) => {
            // handle success
            console.log(response.data);
            this.props.history.push("/profile/your-trip");
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }
    cancel = (event) => {
        event.preventDefault();
        this.props.history.push("/profile/your-trip");
    }

    render() {
        return (
            <div className="container mt-5">
                <form onSubmit={this.editTrip} >
                    <label>Name</label>
                    <input type="text" className="form form-control" name="name" onChange={this.onChange} value={this.state.name} required />
                    <label>Description</label>
                    <input type="text" className="form form-control" name="description" onChange={this.onChange} value={this.state.description} required />
                    <label>Location</label>
                    <input type="text" className="form form-control" name="location" onChange={this.onChange} value={this.state.location} required />
                    <label>Duration</label>
                    <input type="number" className="form form-control" name="duration" onChange={this.onChange} value={this.state.duration} required />
                    <label>Departure</label>
                    <input type="time" className="form form-control" name="departure" onChange={this.onChange} value={this.state.departure} required />
                    <label>Price</label>
                    <input type="number" className="form form-control" name="price" onChange={this.onChange} value={this.state.price} required />
                    <label>languages</label>
                    <input type="text" className="form form-control" name="languages" onChange={this.onChange} value={this.state.languages} required />
                    <label>Group size</label>
                    <input type="number" className="form form-control" name="group_size" onChange={this.onChange} value={this.state.group_size} required />
                    <label>City</label>
                    <input type="text" className="form form-control" name="city" onChange={this.onChange} value={this.state.city} required />
                    <label>Cover</label>
                    <input type="file" className="form form-control" name="cover" onChange={this.handleFile} />
                    <input type="submit" className="btn btn-info m-1" value="Save"></input>
                    <button className="btn btn-info m-1" onClick={this.deleteTrip}>Delete</button>
                    <button className="btn btn-info m-1" onClick={this.cancel}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default withRouter(EditTrip);
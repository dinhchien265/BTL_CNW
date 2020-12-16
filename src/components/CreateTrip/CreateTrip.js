import React from 'react';
import axios from 'axios';
import RegistContributor from './../RegistContributor/RegistContributor';

class CreateTrip extends React.Component {

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
            file: '',
            role: ''
        }
    }

    componentWillMount() {
        axios({
            method: 'GET',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/profile/getUserInfo?token=' + localStorage.getItem("token"),
            data: null
        }).then((response) => {
            // handle success
            console.log(response.data);
            // this.state.name = response.name;
            // this.state.email = response.email;
            this.setState({
                role: response.data.role,
            })
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }

    createTrip = (event) => {
        event.preventDefault();
        console.log("abc");
        axios({
            method: 'POST',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/trip/create?token=' + localStorage.getItem("token"),
            data: {
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
                }).catch((error) => {
                    // handle error
                    console.log(error);
                });

            }
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


    render() {
        if (this.state.role !== "contributor") return (<RegistContributor />)
        return (
            <div className="container mt-5">
                <form onSubmit={this.createTrip} >
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
                    <input type="string" className="form form-control" name="languages" onChange={this.onChange} value={this.state.languages} required />
                    <label>Group size</label>
                    <input type="number" className="form form-control" name="group_size" onChange={this.onChange} value={this.state.group_size} required />
                    <label>City</label>
                    <input type="text" className="form form-control" name="city" onChange={this.onChange} value={this.state.city} required />
                    <label>Cover</label>
                    <input type="file" className="form form-control" name="cover" onChange={this.handleFile} required />
                    <input type="submit" className="btn btn-info m-3" value="Create"></input>
                    <button className="btn btn-info">Cancel</button>
                </form>
            </div>
        )
    }
}

export default CreateTrip;
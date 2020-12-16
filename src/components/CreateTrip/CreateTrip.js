import React from 'react';
import axios from 'axios';
import RegistContributor from './../RegistContributor/RegistContributor';

const citis = [
    "yen-bai",
    "vung-tau",
    "vinh-phuc",
    "vinh-long",
    "tuyen quang",
    "tra-vinh",
    "tien-giang",
    "thua-thien-hue",
    "thanh-hoa",
    "thai-nguyen",
    "thai-binh",
    "tay-ninh",
    "son-la",
    "soc-trang",
    "quang-tri",
    "quang-ninh",
    "quang-ngai",
    "quang-nam",
    "quang-binh",
    "phu-yen",
    "phu-tho",
    "ninh-thuan",
    "ninh-binh",
    "nghe-an",
    "nam-dinh",
    "long-an",
    "lao-cai",
    "lang-son",
    "lam-dong",
    "lai-chau",
    "kon-tum",
    "kien-giang",
    "khanh-hoa",
    "hung-yen",
    "hoa-binh",
    "ho-chi-minh",
    "hau-giang",
    "hai-phong",
    "hai-duong",
    "ha-tinh",
    "ha-noi",
    "ha-nam",
    "ha-giang",
    "gia-lai",
    "dong-thap",
    "dong-nai",
    "dien-bien",
    "dak-nong",
    "dak-lak",
    "da-nang",
    "cao-bang",
    "can-tho",
    "ca-mau",
    "binh-thuan",
    "binh-phuoc",
    "binh-duong",
    "ben-tre",
    "bac-ninh",
    "bac-lieu",
    "bac-kan",
    "bac-giang",
    "an-giang"
]

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
            files: '',
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
            console.log("111111")
            console.log(file);
            if (file !== '') {
                this.uploadCoverImageFile(file, id);
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
    handleCoverImageFile = (event) => {
        this.setState({
            file: event.target.files[0]
        })
    }

    handleImageFile = (event) => {
        this.setState({
            files: event.target.files
        })
    }

    uploadCoverImageFile = (file, idTrip) => {
        console.log("22222222");
        let formData = new FormData();
        formData.append('cover', file);
        console.log(file);
        for (var key of formData.entries()) {
            console.log(key[1]);
        }
        axios({
            method: 'POST',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/trip/updateCover/' + idTrip + '?token=' + localStorage.getItem("token"),
            data: formData
        }).then((response) => {
            // handle success
            console.log(response.data);
            let files = this.state.files;
            console.log("444444");
            if (files !== '') {
                this.uploadImageFile(files, idTrip);
            }

        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }

    uploadImageFile = (files, idTrip) => {
        console.log("333333");
        for (let i = 0; i < files.length; i++) {
            this.uploadSingleImage(files[i], idTrip);
        }
    }

    uploadSingleImage = (file, idTrip) => {

        let formData = new FormData();
        formData.append(`image`, file)

        for (var key of formData.entries()) {
            console.log(key[1]);
        }
        axios({
            method: 'POST',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/trip/addImage/' + idTrip + '?token=' + localStorage.getItem("token"),
            headers: {
                'Content-type': 'multipart/form-data; boundary=<calculated when request is sent>',
            },
            data: formData
        }).then((response) => {
            // handle success
            console.log(response.data);
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }



    render() {
        if (localStorage.getItem("token") === null) return (
            <div className="h3 text-center">Login first</div>
        )
        if (this.state.role !== "contributor") return (<RegistContributor />)
        return (
            <div className="container mt-5">
                <form onSubmit={this.createTrip} encType="multipart/form-data">
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
                    <select className="form form-control" name="city" onChange={this.onChange} required >
                        {
                            citis.map((city, index) => {
                                return (
                                    <option key="index">{city}</option>
                                )
                            })
                        }
                    </select>
                    <label>Cover</label>
                    <input type="file" className="form form-control" name="cover" onChange={this.handleCoverImageFile} required />
                    <label>Image</label>
                    <input type="file" className="form form-control" name="mulfile" onChange={this.handleImageFile} multiple />
                    <input type="submit" className="btn btn-info m-3" value="Create"></input>
                    <button className="btn btn-info">Cancel</button>
                </form>
            </div>
        )
    }
}

export default CreateTrip;
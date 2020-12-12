import React from 'react';
import axios from 'axios';
import Comment from './Comment';

class ListComment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listComment: [],
        };
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://mighty-retreat-21374.herokuapp.com/api/comment/trip/' + this.props.trip_id,
            data: null
        }).then((response) => {
            // handle success
            console.log(response.data);
            // this.state.name = response.name;
            // this.state.email = response.email;
            this.setState({
                listComment: response.data.comments
            })
        }).catch((error) => {
            // handle error
            console.log(error);
        });
    }

    render() {
        let comments = this.state.listComment.map((comment, index) => {
            return (
                <Comment comment={comment} />
            )
        })
        return (
            <div>
                {comments}
            </div>
        )
    }
}
export default ListComment;
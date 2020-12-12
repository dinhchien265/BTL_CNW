import React from 'react';
import axios from 'axios';
import * as StringConstants from './../../constants/String';

class Comment extends React.Component {

    render() {
        return (
            <div className="m-3">
                <img className="comment-avatar" src={StringConstants.IMAGE_PATH + this.props.comment.avatar} alt="avatar" />
                <span className="ml-5">{this.props.comment.comment}</span>
            </div>
        )
    }
}
export default Comment;
import React from 'react';
import axios from 'axios';
import TripList from '../Trip/TripList';

class SearchList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            tripList: null,
        }
    }


    render() {
        if (this.state.tripList === null) return null;
        return (
            <TripList tripList={this.state.tripList} />
        )
    }
}
export default SearchList;
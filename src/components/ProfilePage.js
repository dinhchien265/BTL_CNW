import React from 'react';
import '../App.css';
import AccountInfomation from './AccountInfomation';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import TripList from './TripList';
import YourTrip from './YourTrips';

class ProfilePage extends React.Component {
    render() {


        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 border">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <NavLink to="/profile/account">Account</NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink to="/profile/your-trip">Your Trip</NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink to="/notification">Notification</NavLink>
                            </li>
                            <li className="list-group-item">
                                <NavLink to="/password">Password</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-10 border">
                        <Switch>
                            <Route path="/profile/account">
                                <AccountInfomation />
                            </Route>
                            <Route path="/profile/your-trip">
                                <YourTrip />
                            </Route>
                        </Switch>
                    </div>
                </div>

            </div>

        )
    }
}

export default ProfilePage;
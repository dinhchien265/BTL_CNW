import React from 'react';
import AccountInfomation from './AccountInfomation';
import EditAccountInfomation from './EditAccountInfomation';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import YourTrip from './YourTrips';
import EditTrip from '../Trip/EditTrip';
import ChangePassword from './ChangePassword';

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
                                <NavLink to="/profile/password">Password</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-10 border">
                        <Switch>
                            <Route exact path="/profile/account/edit">
                                <EditAccountInfomation />
                            </Route>
                            <Route exact path="/profile/account">
                                <AccountInfomation />
                            </Route>
                            <Route exact path="/profile/your-trip">
                                <YourTrip />
                            </Route>
                            <Route path="/profile/edit-trip">
                                <EditTrip />
                            </Route>
                            <Route path="/profile/password">
                                <ChangePassword />
                            </Route>
                        </Switch>
                    </div>
                </div>

            </div>

        )
    }
}

export default ProfilePage;
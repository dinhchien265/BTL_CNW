
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div>

                        {this.showContentMenus(routes)}

                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
    showContentMenus = (routes) => {
        let result = null;
        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            )
        })
        return <Switch>{result}</Switch>
    }
}

export default App;

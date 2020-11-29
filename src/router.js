import React from 'react';
import CityTrips from './components/CityTrips';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import ProfilePage from './components/ProfilePage';
import TripList from './components/TripList';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/profile',
        exact: false,
        main: () => <ProfilePage />
    },
    {
        path: '/CityTrip',
        exact: false,
        main: () => <CityTrips />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];
export default routes;
import React from 'react';
import CityTrips from './components/Trip/CityTrips';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import ProfilePage from './components/Profile/ProfilePage';
import CreateTrip from './components/CreateTrip/CreateTrip';
import TripDetail from './components/Trip/TripDetail';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/home',
        exact: false,
        main: () => <Home />
    },
    {
        path: '/CreateTrip',
        exact: false,
        main: () => <CreateTrip />
    },
    {
        path: '/TripDetail',
        exact: false,
        main: () => <TripDetail />
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
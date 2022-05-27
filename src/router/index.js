import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyLayout from '../layouts/EmptyLayout';
import Register from '../containers/register';
import Users from '../containers/users';
import Errors from '../containers/errors';
import PublicRoute from './types/PublicRoute';
import PrivateRoute from './types/PrivateRoute';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                    <PublicRoute layout={EmptyLayout} component={Register} />}
                />
                <Route
                    exact
                    path='/ups'
                    element={
                    <PublicRoute layout={EmptyLayout} component={Errors} />}
                />
                <Route
                    exact
                    path='/users'
                    element={
                    <PrivateRoute layout={EmptyLayout} component={Users} />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;